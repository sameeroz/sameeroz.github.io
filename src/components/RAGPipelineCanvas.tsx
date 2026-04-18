import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ══════════════════════════════════════════════════════════════════
   Pipeline definition
   Nodes are laid out in a gentle 3-D arc so the camera angle
   reveals real depth. The last node (Response) branches downward
   from LLM, giving the "output side" a visual distinction.
══════════════════════════════════════════════════════════════════ */
interface NodeDef {
  label: string;
  sub: string;
  pos: [number, number, number];
  color: [number, number, number]; // r,g,b  0-1
  radius: number;
}

const NODES: NodeDef[] = [
  { label: "Query",     sub: "User Input",        pos: [-46,  0,  10], color: [0.95, 0.65, 0.15], radius: 4.2 },
  { label: "Embedder",  sub: "text-embedding-3",  pos: [-23,  9,   2], color: [0.54, 0.36, 0.96], radius: 4.0 },
  { label: "Vector DB", sub: "Qdrant",             pos: [  0,  0,  -6], color: [0.06, 0.71, 0.83], radius: 4.4 },
  { label: "Retriever", sub: "Top-K Chunks",       pos: [ 23,  9,   2], color: [0.36, 0.82, 0.55], radius: 4.0 },
  { label: "LLM",       sub: "GPT-4 / Bedrock",   pos: [ 46,  0,  10], color: [0.96, 0.36, 0.65], radius: 4.8 },
  { label: "Response",  sub: "Streamed Output",   pos: [ 46,-16,  14], color: [0.72, 0.55, 1.00], radius: 3.8 },
];

/* Directed edges — index pairs [from, to] */
const EDGES: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,5]];

/* How long (seconds) a packet pauses at each node to "process" */
const PROCESS_TIME = [0.55, 0.70, 0.85, 0.65, 0.80, 0.50];

/* ══════════════════════════════════════════════════════════════════
   Sprite helpers
══════════════════════════════════════════════════════════════════ */
function makeLabelSprite(
  label: string,
  sub: string,
  col: [number, number, number]
): THREE.Sprite {
  const cvs = document.createElement("canvas");
  cvs.width  = 220;
  cvs.height = 58;
  const ctx  = cvs.getContext("2d")!;

  const [r, g, b] = col.map(v => Math.round(v * 255));

  /* pill background */
  ctx.fillStyle = `rgba(${Math.round(col[0]*12)},${Math.round(col[1]*12)},${Math.round(col[2]*28)},0.92)`;
  rr(ctx, 0, 0, 220, 58, 10);
  ctx.fill();

  /* border */
  ctx.strokeStyle = `rgba(${r},${g},${b},0.5)`;
  ctx.lineWidth = 1.5;
  rr(ctx, 1, 1, 218, 56, 10);
  ctx.stroke();

  /* label */
  ctx.font = "bold 20px Inter, system-ui, sans-serif";
  ctx.fillStyle = `rgba(${r},${g},${b},1.0)`;
  ctx.textAlign  = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, 110, 18);

  /* sub */
  ctx.font = "12px Inter, system-ui, sans-serif";
  ctx.fillStyle = `rgba(${r},${g},${b},0.6)`;
  ctx.fillText(sub, 110, 42);

  const tex = new THREE.CanvasTexture(cvs);
  const sp  = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  sp.scale.set(14, 4, 1);
  return sp;
}

function rr(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* ══════════════════════════════════════════════════════════════════
   Build a glowing pipe mesh between two positions
   Uses a custom ShaderMaterial so we can animate a traveling pulse
══════════════════════════════════════════════════════════════════ */
function makePipe(
  a: THREE.Vector3,
  b: THREE.Vector3,
  colA: [number, number, number],
  colB: [number, number, number]
): THREE.Line {
  const pts = [];
  const SEGS = 40;
  for (let i = 0; i <= SEGS; i++) {
    const t = i / SEGS;
    pts.push(new THREE.Vector3(
      a.x + (b.x - a.x) * t,
      a.y + (b.y - a.y) * t,
      a.z + (b.z - a.z) * t
    ));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);

  /* UV along the line (0 → 1) for the pulse animation */
  const uvs = new Float32Array((SEGS + 1));
  for (let i = 0; i <= SEGS; i++) uvs[i] = i / SEGS;
  geo.setAttribute("lineUv", new THREE.BufferAttribute(uvs, 1));

  /* Per-vertex colour gradient */
  const cols = new Float32Array((SEGS + 1) * 3);
  for (let i = 0; i <= SEGS; i++) {
    const t = i / SEGS;
    cols[i*3]   = colA[0] + (colB[0] - colA[0]) * t;
    cols[i*3+1] = colA[1] + (colB[1] - colA[1]) * t;
    cols[i*3+2] = colA[2] + (colB[2] - colA[2]) * t;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      pulseT:    { value: -0.2 },   /* packet position along this pipe */
      activated: { value: 0.0 },
    },
    vertexShader: `
      attribute float lineUv;
      attribute vec3  color;
      varying   float vUv;
      varying   vec3  vCol;
      void main(){
        vUv  = lineUv;
        vCol = color;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float pulseT;
      uniform float activated;
      varying float vUv;
      varying vec3  vCol;
      void main(){
        /* base glow line */
        float base = 0.18 + activated * 0.22;

        /* traveling bright pulse dot */
        float dist  = abs(vUv - pulseT);
        float pulse = exp(-dist * dist * 320.0) * (0.85 + activated * 0.4);

        float alpha = base + pulse;
        vec3  col   = mix(vCol, vec3(1.0), pulse * 0.55);
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    linewidth: 1, // WebGL ignores this on most platforms; we fake thickness via glow
  });

  return new THREE.Line(geo, mat);
}

/* ══════════════════════════════════════════════════════════════════
   Node sphere with Fresnel rim + inner core
══════════════════════════════════════════════════════════════════ */
function makeNodeMesh(nd: NodeDef): { outer: THREE.Mesh; inner: THREE.Mesh } {
  const [r, g, b] = nd.color;

  const outerMat = new THREE.ShaderMaterial({
    uniforms: {
      time:   { value: 0 },
      glow:   { value: 0 },   /* 0-1, spikes on packet arrival */
      colR:   { value: r },
      colG:   { value: g },
      colB:   { value: b },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main(){
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform float glow;
      uniform float colR, colG, colB;
      varying vec3  vNormal;
      void main(){
        float f     = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 2.0);
        float pulse = 0.5 + 0.5 * sin(time * 2.0);
        float alpha = f * (0.55 + 0.25 * pulse + glow * 0.6);
        vec3 baseCol = vec3(colR, colG, colB);
        vec3 col     = mix(baseCol, vec3(1.0), glow * 0.3 + f * 0.2);
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const innerMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      glow: { value: 0 },
      colR: { value: r },
      colG: { value: g },
      colB: { value: b },
    },
    vertexShader: `void main(){ gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
      uniform float time, glow, colR, colG, colB;
      void main(){
        float p = 0.5 + 0.5 * sin(time * 3.0);
        float a = 0.4 + 0.2 * p + glow * 0.5;
        vec3  c = mix(vec3(colR,colG,colB), vec3(1.0), glow*0.4);
        gl_FragColor = vec4(c, a);
      }
    `,
    transparent: true,
    depthWrite: false,
  });

  const outer = new THREE.Mesh(new THREE.SphereGeometry(nd.radius, 48, 48), outerMat);
  const inner = new THREE.Mesh(new THREE.SphereGeometry(nd.radius * 0.55, 24, 24), innerMat);
  return { outer, inner };
}

/* ══════════════════════════════════════════════════════════════════
   Expanding ring pulse (emitted on packet arrival)
══════════════════════════════════════════════════════════════════ */
function makeRingPulse(col: [number, number, number]): THREE.Mesh {
  const [r, g, b] = col;
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      progress: { value: 0 },
      colR: { value: r }, colG: { value: g }, colB: { value: b },
    },
    vertexShader: `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }
    `,
    fragmentShader: `
      uniform float progress, colR, colG, colB;
      varying vec2 vUv;
      void main(){
        vec2  uv   = vUv - 0.5;
        float r    = length(uv) * 2.0;
        float ring = 1.0 - abs(r - progress * 1.8) * 12.0;
        float a    = max(0.0, ring) * (1.0 - progress);
        gl_FragColor = vec4(colR,colG,colB,a * 0.7);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(new THREE.PlaneGeometry(22, 22), mat);
}

/* ══════════════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════════════ */
const RAGPipelineCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth  || 520;
    const H = mount.clientHeight || 420;

    /* ── Renderer ────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, W / H, 0.1, 500);
    camera.position.set(0, 12, 90);
    camera.lookAt(0, 2, 0);

    /* ── Node positions as Vector3 ───────────────────────────── */
    const nodeVec = NODES.map(n => new THREE.Vector3(...n.pos));

    /* ── Build node meshes + labels ──────────────────────────── */
    const nodeGlowVals = NODES.map(() => 0);   /* runtime glow per node */
    const nodeMeshes   = NODES.map(nd => {
      const { outer, inner } = makeNodeMesh(nd);
      const pos = new THREE.Vector3(...nd.pos);
      outer.position.copy(pos);
      inner.position.copy(pos);
      scene.add(outer, inner);

      const lbl = makeLabelSprite(nd.label, nd.sub, nd.color);
      lbl.position.copy(pos);
      lbl.position.y += nd.radius + 6;
      scene.add(lbl);

      const ring = makeRingPulse(nd.color);
      ring.position.copy(pos);
      ring.lookAt(camera.position);
      scene.add(ring);

      return { outer, inner, lbl, ring, ringProgress: 0, ringActive: false };
    });

    /* ── Build pipe lines ────────────────────────────────────── */
    const pipes = EDGES.map(([a, b]) =>
      makePipe(nodeVec[a], nodeVec[b], NODES[a].color, NODES[b].color)
    );
    pipes.forEach(p => scene.add(p));

    /* ── Packets ─────────────────────────────────────────────── */
    interface Packet {
      edgeIdx: number;     /* which edge [0..4] */
      t: number;           /* 0→1 along edge */
      speed: number;
      waitTimer: number;   /* pause at destination */
      waiting: boolean;
      mesh: THREE.Mesh;
    }

    const makePacketMesh = (col: [number, number, number]) => {
      const [r, g, b] = col;
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          colR: { value: r }, colG: { value: g }, colB: { value: b },
        },
        vertexShader: `
          varying vec3 vNormal;
          void main(){
            vNormal = normalize(normalMatrix*normal);
            gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
          }
        `,
        fragmentShader: `
          uniform float time,colR,colG,colB;
          varying vec3 vNormal;
          void main(){
            float f = pow(1.0-abs(dot(vNormal,vec3(0,0,1))),1.5);
            float p = 0.5+0.5*sin(time*8.0);
            float a = 0.7 + f*0.5 + p*0.2;
            vec3 c  = mix(vec3(colR,colG,colB),vec3(1.0),f*0.5);
            gl_FragColor = vec4(c,a);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 16), mat);
    };

    /* Stagger 3 packets across different edge indices so pipeline
       always has packets in motion                                */
    const NUM_PACKETS = 3;
    const packetStartEdges = [0, 2, 4];
    const packetStartTs    = [0.5, 0.2, 0.8];

    const packets: Packet[] = Array.from({ length: NUM_PACKETS }, (_, i) => {
      const edgeIdx = packetStartEdges[i];
      const col = NODES[EDGES[edgeIdx][0]].color;
      const mesh = makePacketMesh(col);
      scene.add(mesh);
      return {
        edgeIdx,
        t: packetStartTs[i],
        speed: 0.48 + i * 0.06,
        waitTimer: 0,
        waiting: false,
        mesh,
      };
    });

    /* ── Ambient floating particles ──────────────────────────── */
    const AMB = 60;
    const ambPos   = new Float32Array(AMB * 3);
    const ambColor = new Float32Array(AMB * 3);
    const ambAlpha = new Float32Array(AMB);
    const ambPhase = new Float32Array(AMB);
    for (let i = 0; i < AMB; i++) {
      ambPos[i*3]   = (Math.random() - 0.5) * 110;
      ambPos[i*3+1] = (Math.random() - 0.5) * 50;
      ambPos[i*3+2] = (Math.random() - 0.5) * 40;
      const col = NODES[Math.floor(Math.random() * NODES.length)].color;
      ambColor[i*3] = col[0]; ambColor[i*3+1] = col[1]; ambColor[i*3+2] = col[2];
      ambAlpha[i]  = Math.random() * 0.25 + 0.05;
      ambPhase[i]  = Math.random() * Math.PI * 2;
    }
    const ambGeo = new THREE.BufferGeometry();
    ambGeo.setAttribute("position", new THREE.BufferAttribute(ambPos,   3));
    ambGeo.setAttribute("color",    new THREE.BufferAttribute(ambColor, 3));
    ambGeo.setAttribute("aAlpha",   new THREE.BufferAttribute(ambAlpha, 1));
    ambGeo.setAttribute("aPhase",   new THREE.BufferAttribute(ambPhase, 1));
    const ambMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float aAlpha, aPhase;
        attribute vec3  color;
        varying float vA; varying vec3 vC;
        uniform float time;
        void main(){
          vA = aAlpha*(0.5+0.5*sin(time*0.8+aPhase));
          vC = color;
          vec4 mv = modelViewMatrix*vec4(position,1.0);
          gl_PointSize = 2.2*(120.0/-mv.z);
          gl_Position  = projectionMatrix*mv;
        }
      `,
      fragmentShader: `
        varying float vA; varying vec3 vC;
        void main(){
          vec2 uv=gl_PointCoord-0.5; float r=length(uv);
          if(r>0.5)discard;
          gl_FragColor=vec4(vC,(1.0-r*2.0)*vA);
        }
      `,
      transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, vertexColors:true,
    });
    scene.add(new THREE.Points(ambGeo, ambMat));

    /* ── Mouse parallax ──────────────────────────────────────── */
    const mouse = new THREE.Vector2();
    const camTarget = new THREE.Vector2();
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ── Animate ─────────────────────────────────────────────── */
    const clock  = new THREE.Clock();
    let   animId: number;

    const tmpPos = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t  = clock.getElapsedTime();

      ambMat.uniforms.time.value = t;

      /* ── Update node uniforms ── */
      nodeMeshes.forEach((nm, i) => {
        const g = nodeGlowVals[i];
        (nm.outer.material as THREE.ShaderMaterial).uniforms.time.value = t;
        (nm.outer.material as THREE.ShaderMaterial).uniforms.glow.value = g;
        (nm.inner.material as THREE.ShaderMaterial).uniforms.time.value = t;
        (nm.inner.material as THREE.ShaderMaterial).uniforms.glow.value = g;
        nodeGlowVals[i] = Math.max(0, g - dt * 1.6);   /* decay */

        /* ring pulse */
        if (nm.ringActive) {
          nm.ringProgress += dt * 1.1;
          (nm.ring.material as THREE.ShaderMaterial).uniforms.progress.value = nm.ringProgress;
          if (nm.ringProgress >= 1) { nm.ringActive = false; nm.ringProgress = 0; }
        }
      });

      /* ── Update packets ── */
      packets.forEach((pk) => {
        const [fromIdx, toIdx] = EDGES[pk.edgeIdx];
        const pkMat = pk.mesh.material as THREE.ShaderMaterial;
        pkMat.uniforms.time.value = t;

        if (pk.waiting) {
          pk.waitTimer -= dt;
          if (pk.waitTimer <= 0) {
            pk.waiting = false;
            /* advance to next edge, or loop back to start */
            if (pk.edgeIdx < EDGES.length - 1) {
              pk.edgeIdx++;
              pk.t = 0;
              /* update packet colour for new edge */
              const nc = NODES[EDGES[pk.edgeIdx][0]].color;
              pkMat.uniforms.colR.value = nc[0];
              pkMat.uniforms.colG.value = nc[1];
              pkMat.uniforms.colB.value = nc[2];
            } else {
              /* recycle: jump back to edge 0 */
              pk.edgeIdx = 0;
              pk.t = 0;
              const nc = NODES[EDGES[0][0]].color;
              pkMat.uniforms.colR.value = nc[0];
              pkMat.uniforms.colG.value = nc[1];
              pkMat.uniforms.colB.value = nc[2];
            }
          }
        } else {
          pk.t += dt * pk.speed;

          /* Update packet position along edge */
          const a = nodeVec[fromIdx];
          const b = nodeVec[toIdx];
          pk.mesh.position.lerpVectors(a, b, pk.t);

          /* Update pipe pulse uniform */
          ;(pipes[pk.edgeIdx].material as THREE.ShaderMaterial).uniforms.pulseT.value = pk.t;

          if (pk.t >= 1.0) {
            pk.t = 1.0;
            pk.waiting = true;
            pk.waitTimer = PROCESS_TIME[toIdx];

            /* Activate destination node */
            nodeGlowVals[toIdx] = 1.0;
            nodeMeshes[toIdx].ringActive   = true;
            nodeMeshes[toIdx].ringProgress = 0;

            /* Light up pipe */
            ;(pipes[pk.edgeIdx].material as THREE.ShaderMaterial).uniforms.activated.value = 1.0;
            setTimeout(() => {
              if ((pipes[pk.edgeIdx].material as THREE.ShaderMaterial).uniforms) {
                (pipes[pk.edgeIdx].material as THREE.ShaderMaterial).uniforms.activated.value = 0.0;
              }
            }, 400);
          }
        }

        /* Keep packet above the pipe, hidden while waiting at origin */
        if (pk.waiting && pk.edgeIdx === 0) {
          pk.mesh.position.copy(nodeVec[EDGES[0][0]]);
        }
      });

      /* ── Camera parallax ── */
      camTarget.x += (mouse.x * 6 - camTarget.x) * 0.04;
      camTarget.y += (-mouse.y * 3 - camTarget.y) * 0.04;
      camera.position.x = camTarget.x;
      camera.position.y = 12 + camTarget.y;
      camera.lookAt(0, 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    /* ── Resize ──────────────────────────────────────────────── */
    const ro = new ResizeObserver(() => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      style={{ minHeight: 420 }}
    />
  );
};

export default RAGPipelineCanvas;
