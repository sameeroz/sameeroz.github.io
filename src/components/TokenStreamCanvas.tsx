import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────
   AI vocabulary — the "tokens" an LLM generates
───────────────────────────────────────────────────────────────── */
const TOKEN_WORDS = [
  "RAG", "pipeline", "embedding", "attention", "context_window",
  "vector_search", "agent_loop", "tool_call", "few_shot", "inference",
  "transformer", "latency", "streaming", "prompt", "temperature=0.7",
  "chain_of_thought", "Arabic NLP", "voice_stream", "AWS Bedrock",
  "FastAPI", "LangChain", "LlamaIndex", "<|im_start|>", "logprob",
  "top_p=0.9", "retrieval", "fine_tune", "RLHF", "tokenizer",
  "semantic_search", "MCP", "LiveKit", "vLLM", "Langfuse",
];

/* ─────────────────────────────────────────────────────────────────
   Colour palette — violet / cyan / pink accent
───────────────────────────────────────────────────────────────── */
const PALETTE = [
  { r: 0.54, g: 0.36, b: 0.96 }, // violet
  { r: 0.06, g: 0.71, b: 0.83 }, // cyan
  { r: 0.96, g: 0.40, b: 0.70 }, // pink
  { r: 0.36, g: 0.72, b: 0.96 }, // sky blue
  { r: 0.95, g: 0.75, b: 0.25 }, // amber
];

/* ─────────────────────────────────────────────────────────────────
   Quadratic bezier helpers
───────────────────────────────────────────────────────────────── */
function bezier(
  t: number,
  p0: THREE.Vector3,
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  out: THREE.Vector3
) {
  const mt = 1 - t;
  out.x = mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x;
  out.y = mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y;
  out.z = mt * mt * p0.z + 2 * mt * t * p1.z + t * t * p2.z;
}

/* ─────────────────────────────────────────────────────────────────
   Build a word sprite (canvas → texture → THREE.Sprite)
───────────────────────────────────────────────────────────────── */
function makeWordSprite(
  word: string,
  col: { r: number; g: number; b: number }
): THREE.Sprite {
  const cvs = document.createElement("canvas");
  const fontSize = 22;
  const pad = 14;
  const ctx = cvs.getContext("2d")!;

  ctx.font = `600 ${fontSize}px "JetBrains Mono", "Courier New", monospace`;
  const tw = ctx.measureText(word).width;
  cvs.width  = tw + pad * 2;
  cvs.height = fontSize + pad;

  /* Re-set font after resize */
  ctx.font = `600 ${fontSize}px "JetBrains Mono", "Courier New", monospace`;

  /* Pill background */
  const bg = `rgba(${Math.round(col.r*20)},${Math.round(col.g*20)},${Math.round(col.b*40)},0.85)`;
  ctx.fillStyle = bg;
  roundRect(ctx, 0, 0, cvs.width, cvs.height, 8);
  ctx.fill();

  /* Border */
  ctx.strokeStyle = `rgba(${Math.round(col.r*255)},${Math.round(col.g*255)},${Math.round(col.b*255)},0.55)`;
  ctx.lineWidth = 1.5;
  roundRect(ctx, 1, 1, cvs.width - 2, cvs.height - 2, 8);
  ctx.stroke();

  /* Text */
  ctx.fillStyle = `rgba(${Math.round(col.r*255)},${Math.round(col.g*255)},${Math.round(col.b*255)},1.0)`;
  ctx.textBaseline = "middle";
  ctx.fillText(word, pad, cvs.height / 2);

  const tex = new THREE.CanvasTexture(cvs);
  const mat = new THREE.SpriteMaterial({
    map: tex,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    opacity: 0,
  });

  const sprite = new THREE.Sprite(mat);
  const aspect = cvs.width / cvs.height;
  sprite.scale.set(aspect * 5, 5, 1);
  return sprite;
}

function roundRect(
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

/* ─────────────────────────────────────────────────────────────────
   Stream state machine
   Each stream:
     idle → launch → travel (trail particles move) → arrive (word fades in) → hold → fade → idle
───────────────────────────────────────────────────────────────── */
const TRAIL_LEN = 18; // particles per stream trail

interface Stream {
  /* bezier control points */
  p0: THREE.Vector3;
  p1: THREE.Vector3; // mid control
  p2: THREE.Vector3; // destination

  colIdx: number;
  word: string;
  sprite: THREE.Sprite;

  /* trail: t values for each particle (0 = back, 1 = front) */
  trailT: number[];

  /* state */
  phase: "idle" | "travel" | "arrive" | "hold" | "fade";
  headT: number;   // lead particle 0..1
  wordOpacity: number;
  idleTimer: number; // countdown before next launch
}

const NUM_STREAMS = 7;
const SPAWN_RADIUS = 3.5;

function createStream(scene: THREE.Scene, wordIdx: number): Stream {
  const col = PALETTE[wordIdx % PALETTE.length];

  /* Random outward direction — spread across a cone */
  const theta = Math.random() * Math.PI * 2;
  const phi   = Math.PI * 0.25 + Math.random() * Math.PI * 0.35;
  const dist  = 28 + Math.random() * 18;

  const dest = new THREE.Vector3(
    dist * Math.sin(phi) * Math.cos(theta),
    dist * Math.cos(phi) * 0.8 + (Math.random() - 0.5) * 14,
    dist * Math.sin(phi) * Math.sin(theta) * 0.5
  );

  /* Bezier mid point — arc upward or sideways */
  const mid = dest.clone().multiplyScalar(0.5);
  mid.x += (Math.random() - 0.5) * 18;
  mid.y += 8 + Math.random() * 14;
  mid.z += (Math.random() - 0.5) * 10;

  const sprite = makeWordSprite(TOKEN_WORDS[wordIdx % TOKEN_WORDS.length], col);
  sprite.position.copy(dest);
  scene.add(sprite);

  return {
    p0: new THREE.Vector3(
      (Math.random() - 0.5) * SPAWN_RADIUS,
      (Math.random() - 0.5) * SPAWN_RADIUS,
      (Math.random() - 0.5) * SPAWN_RADIUS
    ),
    p1: mid,
    p2: dest,
    colIdx: wordIdx % PALETTE.length,
    word: TOKEN_WORDS[wordIdx % TOKEN_WORDS.length],
    sprite,
    trailT: Array(TRAIL_LEN).fill(0),
    phase: "idle",
    headT: 0,
    wordOpacity: 0,
    idleTimer: Math.random() * 0.8,
  };
}

/* ─────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────── */
const TokenStreamCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth  || 420;
    const H = mount.clientHeight || 420;

    /* ── Renderer ─────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 400);
    camera.position.z = 72;

    /* ── Central LLM node ─────────────────────────────────────── */
    const coreMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float f = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 2.2);
          float pulse = 0.55 + 0.45 * sin(time * 2.2);
          vec3 col = mix(vec3(0.54,0.36,0.96), vec3(0.06,0.71,0.83), f);
          gl_FragColor = vec4(col, f * (0.6 + 0.3*pulse));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
    });
    const coreInnerMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `void main(){ gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `
        uniform float time;
        void main(){
          float p=0.5+0.5*sin(time*3.0);
          gl_FragColor=vec4(0.72,0.55,1.0,0.55+0.2*p);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    const coreHaloMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        void main(){
          vNormal=normalize(normalMatrix*normal);
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main(){
          float f=pow(1.0-abs(dot(vNormal,vec3(0,0,1))),3.5);
          float p=0.5+0.5*sin(time*1.2);
          gl_FragColor=vec4(0.54,0.36,0.96,f*0.35*(0.7+0.3*p));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });

    scene.add(new THREE.Mesh(new THREE.SphereGeometry(4.5, 48, 48), coreMat));
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(2.8, 32, 32), coreInnerMat));
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(9,   32, 32), coreHaloMat));

    /* ── "LLM" label above the node ──────────────────────────── */
    const llmCvs = document.createElement("canvas");
    llmCvs.width = 128; llmCvs.height = 40;
    const lc = llmCvs.getContext("2d")!;
    lc.font = "bold 20px Inter, system-ui";
    lc.fillStyle = "rgba(196,181,253,0.9)";
    lc.textAlign = "center";
    lc.textBaseline = "middle";
    lc.fillText("LLM", 64, 20);
    const llmSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(llmCvs), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    llmSprite.scale.set(7, 2.2, 1);
    llmSprite.position.set(0, 8.5, 0);
    scene.add(llmSprite);

    /* ── Trail particle system (shared across all streams) ────── */
    const MAX_PARTICLES = NUM_STREAMS * TRAIL_LEN;
    const ptPos    = new Float32Array(MAX_PARTICLES * 3);
    const ptColors = new Float32Array(MAX_PARTICLES * 3);
    const ptAlpha  = new Float32Array(MAX_PARTICLES);
    const ptSize   = new Float32Array(MAX_PARTICLES);

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute("position", new THREE.BufferAttribute(ptPos,    3).setUsage(THREE.DynamicDrawUsage));
    ptGeo.setAttribute("color",    new THREE.BufferAttribute(ptColors, 3).setUsage(THREE.DynamicDrawUsage));
    ptGeo.setAttribute("aAlpha",   new THREE.BufferAttribute(ptAlpha,  1).setUsage(THREE.DynamicDrawUsage));
    ptGeo.setAttribute("aSize",    new THREE.BufferAttribute(ptSize,   1).setUsage(THREE.DynamicDrawUsage));

    const ptMat = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: `
        attribute float aAlpha;
        attribute float aSize;
        attribute vec3  color;
        varying   float vAlpha;
        varying   vec3  vColor;
        void main(){
          vAlpha = aAlpha;
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = aSize*(160.0/-mv.z);
          gl_Position  = projectionMatrix*mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3  vColor;
        void main(){
          vec2  uv=gl_PointCoord-0.5;
          float r=length(uv);
          if(r>0.5) discard;
          float core=1.0-smoothstep(0.0,0.25,r);
          float halo=1.0-smoothstep(0.2,0.5,r);
          float a=(core*0.9+halo*0.4)*vAlpha;
          gl_FragColor=vec4(mix(vColor,vec3(1.0),core*0.4),a);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
      vertexColors: true,
    });

    const ptMesh = new THREE.Points(ptGeo, ptMat);
    scene.add(ptMesh);

    /* ── Streams ──────────────────────────────────────────────── */
    const streams: Stream[] = [];
    for (let i = 0; i < NUM_STREAMS; i++) {
      streams.push(createStream(scene, i));
    }

    /* stagger initial idle timers */
    streams.forEach((s, i) => { s.idleTimer = i * (0.6 / NUM_STREAMS); });

    /* ── Rotation (mouse drag) ────────────────────────────────── */
    let isDragging = false;
    let prevMouse  = { x: 0, y: 0 };
    let rotY = 0, rotX = 0.12;
    let velY = 0.003, velX = 0;

    const onDown  = (e: MouseEvent) => { isDragging = true;  prevMouse = { x: e.clientX, y: e.clientY }; };
    const onUp    = ()               => { isDragging = false; };
    const onMove  = (e: MouseEvent)  => {
      if (!isDragging) return;
      velY = (e.clientX - prevMouse.x) * 0.005;
      velX = (e.clientY - prevMouse.y) * 0.005;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onTDown = (e: TouchEvent)  => { isDragging = true;  prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const onTMove = (e: TouchEvent)  => {
      if (!isDragging) return;
      velY = (e.touches[0].clientX - prevMouse.x) * 0.005;
      velX = (e.touches[0].clientY - prevMouse.y) * 0.005;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTUp   = () => { isDragging = false; };

    renderer.domElement.addEventListener("mousedown",  onDown);
    renderer.domElement.addEventListener("touchstart", onTDown, { passive: true });
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchend",  onTUp);
    window.addEventListener("touchmove", onTMove, { passive: true });

    /* ── Animate ─────────────────────────────────────────────── */
    const clock   = new THREE.Clock();
    let animId: number;
    let wordIdx   = NUM_STREAMS; // next word to assign

    const tmpPos = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t  = clock.getElapsedTime();

      coreMat.uniforms.time.value      = t;
      coreInnerMat.uniforms.time.value = t;
      coreHaloMat.uniforms.time.value  = t;

      /* ── Update each stream ─── */
      streams.forEach((s, si) => {
        const TRAVEL_SPEED = 0.55 + s.colIdx * 0.04;

        switch (s.phase) {

          case "idle":
            s.idleTimer -= dt;
            if (s.idleTimer <= 0) {
              s.headT    = 0;
              s.phase    = "travel";
              s.trailT   = Array(TRAIL_LEN).fill(0);
            }
            break;

          case "travel":
            s.headT += dt * TRAVEL_SPEED;
            /* distribute trail particles behind head */
            for (let j = 0; j < TRAIL_LEN; j++) {
              const lag = (j / TRAIL_LEN) * 0.22;
              s.trailT[j] = Math.max(0, s.headT - lag);
            }
            if (s.headT >= 1.0) {
              s.headT = 1.0;
              s.phase = "arrive";
            }
            break;

          case "arrive":
            s.wordOpacity += dt * 2.2;
            if (s.wordOpacity >= 1) {
              s.wordOpacity = 1;
              s.phase       = "hold";
              s.idleTimer   = 1.0 + Math.random() * 0.8;
            }
            break;

          case "hold":
            s.idleTimer -= dt;
            if (s.idleTimer <= 0) s.phase = "fade";
            break;

          case "fade":
            s.wordOpacity -= dt * 1.6;
            /* also fade trail head back to origin */
            s.headT -= dt * 0.8;
            for (let j = 0; j < TRAIL_LEN; j++) {
              const lag = (j / TRAIL_LEN) * 0.22;
              s.trailT[j] = Math.max(0, s.headT - lag);
            }
            if (s.wordOpacity <= 0) {
              s.wordOpacity = 0;
              s.headT       = 0;
              s.phase       = "idle";
              s.idleTimer   = 0.2 + Math.random() * 0.6;

              /* Assign a new word + new destination */
              const newWord = wordIdx++ % TOKEN_WORDS.length;
              const col     = PALETTE[newWord % PALETTE.length];

              /* Remove old sprite */
              scene.remove(s.sprite);
              (s.sprite.material as THREE.SpriteMaterial).map?.dispose();
              s.sprite.material.dispose();

              /* Pick new destination */
              const theta = Math.random() * Math.PI * 2;
              const phi   = Math.PI * 0.22 + Math.random() * Math.PI * 0.38;
              const dist  = 28 + Math.random() * 18;
              s.p2.set(
                dist * Math.sin(phi) * Math.cos(theta),
                dist * Math.cos(phi) * 0.8 + (Math.random() - 0.5) * 14,
                dist * Math.sin(phi) * Math.sin(theta) * 0.5
              );
              s.p1.copy(s.p2).multiplyScalar(0.5);
              s.p1.x += (Math.random() - 0.5) * 18;
              s.p1.y += 8 + Math.random() * 14;
              s.p1.z += (Math.random() - 0.5) * 10;
              s.p0.set(
                (Math.random() - 0.5) * SPAWN_RADIUS,
                (Math.random() - 0.5) * SPAWN_RADIUS,
                (Math.random() - 0.5) * SPAWN_RADIUS
              );
              s.colIdx = newWord % PALETTE.length;
              s.word   = TOKEN_WORDS[newWord];

              const sprite = makeWordSprite(TOKEN_WORDS[newWord], col);
              sprite.position.copy(s.p2);
              scene.add(sprite);
              s.sprite = sprite;
            }
            break;
        }

        /* ── Write trail to shared particle buffer ─── */
        const pCol = PALETTE[s.colIdx];
        for (let j = 0; j < TRAIL_LEN; j++) {
          const idx  = si * TRAIL_LEN + j;
          const frac = j / (TRAIL_LEN - 1);   // 0=tail, 1=head

          bezier(s.trailT[j], s.p0, s.p1, s.p2, tmpPos);
          ptPos[idx*3]   = tmpPos.x;
          ptPos[idx*3+1] = tmpPos.y;
          ptPos[idx*3+2] = tmpPos.z;

          ptColors[idx*3]   = pCol.r;
          ptColors[idx*3+1] = pCol.g;
          ptColors[idx*3+2] = pCol.b;

          /* head particle = bright; tail fades to 0 */
          const headAlpha = (s.phase === "travel" || s.phase === "arrive")
            ? frac * frac
            : frac * frac * Math.max(0, s.headT);

          ptAlpha[idx] = headAlpha * 0.9;
          ptSize[idx]  = (frac * 2.8 + 0.6) * (j === TRAIL_LEN - 1 ? 1.6 : 1.0);
        }

        /* ── Word sprite opacity ─── */
        s.sprite.material.opacity = s.wordOpacity;
      });

      /* Flush GPU buffers */
      (ptGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (ptGeo.attributes.color    as THREE.BufferAttribute).needsUpdate = true;
      (ptGeo.attributes.aAlpha   as THREE.BufferAttribute).needsUpdate = true;
      (ptGeo.attributes.aSize    as THREE.BufferAttribute).needsUpdate = true;

      /* ── Scene rotation ─── */
      if (!isDragging) {
        velY = velY * 0.94 + 0.0008;
        velX *= 0.94;
      }
      rotY += velY;
      rotX  = Math.max(-0.45, Math.min(0.45, rotX + velX));

      ptMesh.rotation.y = rotY;
      ptMesh.rotation.x = rotX;
      streams.forEach(s => {
        s.sprite.rotation.y = rotY;
        s.sprite.rotation.x = rotX;
      });
      /* Keep core centred (no rotation needed) */

      renderer.render(scene, camera);
    };

    animate();

    /* ── Resize ───────────────────────────────────────────────── */
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
      renderer.domElement.removeEventListener("mousedown",  onDown);
      renderer.domElement.removeEventListener("touchstart", onTDown);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchend",  onTUp);
      window.removeEventListener("touchmove", onTMove);
      streams.forEach(s => {
        scene.remove(s.sprite);
        (s.sprite.material as THREE.SpriteMaterial).map?.dispose();
        s.sprite.material.dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full select-none cursor-grab active:cursor-grabbing"
      style={{ minHeight: 420 }}
    />
  );
};

export default TokenStreamCanvas;
