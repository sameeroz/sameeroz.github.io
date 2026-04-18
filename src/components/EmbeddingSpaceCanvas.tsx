import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────
   Semantic clusters — each represents a domain Sameer works in.
   Points start scattered, then converge toward their cluster centre
   with gentle Perlin-style noise so nothing feels rigid.
───────────────────────────────────────────────────────────────── */
const CLUSTERS = [
  { label: "RAG Pipelines",     center: new THREE.Vector3(-28,  14,  -6), color: [0.06, 0.71, 0.83] as [number,number,number], count: 55 },
  { label: "LLMs",             center: new THREE.Vector3( 26,  18,   8), color: [0.54, 0.36, 0.96] as [number,number,number], count: 60 },
  { label: "Agentic Systems",  center: new THREE.Vector3(  4, -24,  12), color: [0.96, 0.36, 0.64] as [number,number,number], count: 50 },
  { label: "Voice AI",         center: new THREE.Vector3(-22, -18,  -4), color: [0.95, 0.62, 0.12] as [number,number,number], count: 45 },
  { label: "Vector DBs",       center: new THREE.Vector3( 30,  -8, -14), color: [0.16, 0.82, 0.56] as [number,number,number], count: 48 },
  { label: "NLP / Arabic",     center: new THREE.Vector3( -6,  28,  10), color: [0.36, 0.72, 0.96] as [number,number,number], count: 42 },
];
const TOTAL = CLUSTERS.reduce((s, c) => s + c.count, 0);

/* Smooth noise helper (simple sum of sines) */
function noise(x: number, y: number, z: number, t: number) {
  return (
    Math.sin(x * 0.4 + t * 0.7) * 0.5 +
    Math.sin(y * 0.3 + t * 0.5) * 0.5 +
    Math.cos(z * 0.5 + t * 0.9) * 0.5
  );
}

interface Point {
  clusterIdx: number;
  /* current world position */
  px: number; py: number; pz: number;
  /* scattered start position */
  sx: number; sy: number; sz: number;
  /* unique offsets for noise */
  ox: number; oy: number; oz: number;
  /* animation phase — 0=scattered, 1=clustered */
  phase: number;
  /* how quickly it converges */
  speed: number;
  size: number;
}

const EmbeddingSpaceCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    /* ── Renderer ─────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 500);
    camera.position.z = 90;

    /* ── Build points ─────────────────────────────────────────── */
    const points: Point[] = [];
    const SCATTER_R = 70;

    CLUSTERS.forEach((cl, ci) => {
      for (let i = 0; i < cl.count; i++) {
        const sx = (Math.random() - 0.5) * SCATTER_R;
        const sy = (Math.random() - 0.5) * SCATTER_R;
        const sz = (Math.random() - 0.5) * SCATTER_R * 0.6;
        points.push({
          clusterIdx: ci,
          px: sx, py: sy, pz: sz,
          sx, sy, sz,
          ox: Math.random() * 100,
          oy: Math.random() * 100,
          oz: Math.random() * 100,
          phase: 0,
          speed: 0.15 + Math.random() * 0.25,
          size: 1.2 + Math.random() * 2.2,
        });
      }
    });

    /* ── GPU Buffers ──────────────────────────────────────────── */
    const positions  = new Float32Array(TOTAL * 3);
    const colors     = new Float32Array(TOTAL * 3);
    const sizes      = new Float32Array(TOTAL);
    const intensities = new Float32Array(TOTAL);   /* closeness to centre */

    points.forEach((p, i) => {
      const c = CLUSTERS[p.clusterIdx].color;
      colors[i * 3]     = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
      sizes[i] = p.size;
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position",  new THREE.BufferAttribute(positions,   3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute("color",     new THREE.BufferAttribute(colors,      3));
    geo.setAttribute("aSize",     new THREE.BufferAttribute(sizes,       1));
    geo.setAttribute("intensity", new THREE.BufferAttribute(intensities, 1).setUsage(THREE.DynamicDrawUsage));

    const mat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        attribute vec3  color;
        attribute float intensity;
        varying   vec3  vColor;
        varying   float vIntensity;
        void main() {
          vColor     = color;
          vIntensity = intensity;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (1.0 + intensity * 1.6) * (180.0 / -mvPos.z);
          gl_Position  = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3  vColor;
        varying float vIntensity;
        void main() {
          vec2  uv = gl_PointCoord - 0.5;
          float r  = length(uv);
          if (r > 0.5) discard;

          /* soft disc + bright core when clustered */
          float core = 1.0 - smoothstep(0.0, 0.22, r);
          float halo = 1.0 - smoothstep(0.18, 0.5, r);
          float alpha = (core * (0.85 + vIntensity * 0.5) + halo * 0.35) * 0.92;

          /* slight white-hot core tint at full intensity */
          vec3 col = mix(vColor, vec3(1.0), vIntensity * 0.35);
          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
      vertexColors: true,
    });

    const particleMesh = new THREE.Points(geo, mat);
    scene.add(particleMesh);

    /* ── Cluster label sprites ────────────────────────────────── */
    const labelSprites: THREE.Sprite[] = [];

    CLUSTERS.forEach((cl) => {
      const canvas = document.createElement("canvas");
      canvas.width  = 256;
      canvas.height = 56;
      const ctx = canvas.getContext("2d")!;

      /* pill background */
      ctx.fillStyle = "rgba(10,8,24,0.72)";
      roundRect(ctx, 0, 0, 256, 56, 12);
      ctx.fill();

      /* border */
      const [r, g, b] = cl.color;
      ctx.strokeStyle = `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},0.55)`;
      ctx.lineWidth = 2;
      roundRect(ctx, 1, 1, 254, 54, 12);
      ctx.stroke();

      /* text */
      ctx.font = "bold 22px Inter, system-ui, sans-serif";
      ctx.fillStyle = `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},0.95)`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(cl.label, 128, 28);

      const tex = new THREE.CanvasTexture(canvas);
      const spMat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
      const sprite = new THREE.Sprite(spMat);
      sprite.scale.set(16, 3.5, 1);
      sprite.position.copy(cl.center).multiplyScalar(1.18);
      sprite.position.y += 7;
      sprite.material.opacity = 0;
      scene.add(sprite);
      labelSprites.push(sprite);
    });

    function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
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

    /* ── Connection lines between same-cluster points ─────────── */
    /* We'll draw a limited set of intra-cluster connections */
    const MAX_LINES = 200;
    const linePosArr  = new Float32Array(MAX_LINES * 2 * 3);
    const lineAlphaArr = new Float32Array(MAX_LINES * 2);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePosArr,  3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute("alpha",    new THREE.BufferAttribute(lineAlphaArr,1).setUsage(THREE.DynamicDrawUsage));

    const lineMat = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float alpha;
        varying   float vAlpha;
        void main() {
          vAlpha      = alpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(0.65, 0.45, 0.98, vAlpha);
        }
      `,
      transparent: true,
      depthWrite:  false,
      blending:    THREE.AdditiveBlending,
    });

    const lineSegs = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineSegs);

    /* ── Mouse drag to rotate ─────────────────────────────────── */
    let isDragging = false;
    let prevMouse  = { x: 0, y: 0 };
    let rotX = 0.18, rotY = 0;
    let velX = 0,    velY = 0.0012;   /* gentle auto-spin */

    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMouseUp   = () => { isDragging = false; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      velY = dx * 0.004;
      velX = dy * 0.004;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    // Touch
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      prevMouse  = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchMove  = (e: TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - prevMouse.x;
      const dy = e.touches[0].clientY - prevMouse.y;
      velY = dx * 0.004;
      velX = dy * 0.004;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    renderer.domElement.addEventListener("mousedown",  onMouseDown);
    renderer.domElement.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mouseup",    onMouseUp);
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("touchend",   onTouchEnd);
    window.addEventListener("touchmove",  onTouchMove,  { passive: true });

    /* ── Animation state ──────────────────────────────────────── */
    /* Cycle: scatter (5s) → converge (8s) → hold (4s) → scatter … */
    const CYCLE = { scatter: 3, converge: 9, hold: 5 };
    const TOTAL_CYCLE = CYCLE.scatter + CYCLE.converge + CYCLE.hold;

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t  = clock.getElapsedTime();
      mat.uniforms.time.value = t;

      /* Cycle phase [0,1] */
      const ct       = t % TOTAL_CYCLE;
      let targetPhase = 0;
      if (ct < CYCLE.scatter) {
        targetPhase = 0;                                           /* scattered */
      } else if (ct < CYCLE.scatter + CYCLE.converge) {
        targetPhase = (ct - CYCLE.scatter) / CYCLE.converge;      /* converging */
      } else {
        targetPhase = 1;                                           /* clustered  */
      }

      /* Update each point */
      let lineIdx = 0;
      CLUSTERS.forEach((cl, ci) => {
        const clusterPoints = points.filter(p => p.clusterIdx === ci);

        let clusterAvgPhase = 0;
        clusterPoints.forEach((p) => {
          /* Smooth phase approach */
          p.phase += (targetPhase - p.phase) * p.speed * 0.04;
          clusterAvgPhase += p.phase;

          /* Noise displacement (smaller when clustered) */
          const noiseAmt = (1 - p.phase) * 3.5 + 0.6;
          const nx = noise(p.ox,       p.oy,       p.oz,       t) * noiseAmt;
          const ny = noise(p.ox + 40,  p.oy + 40,  p.oz + 40,  t) * noiseAmt;
          const nz = noise(p.ox + 80,  p.oy + 80,  p.oz + 80,  t) * noiseAmt * 0.6;

          p.px = p.sx + (cl.center.x - p.sx) * p.phase + nx;
          p.py = p.sy + (cl.center.y - p.sy) * p.phase + ny;
          p.pz = p.sz + (cl.center.z - p.sz) * p.phase + nz;
        });
        clusterAvgPhase /= clusterPoints.length;

        /* Intra-cluster connections when converged enough */
        if (clusterAvgPhase > 0.55 && lineIdx < MAX_LINES - 1) {
          for (let a = 0; a < clusterPoints.length && lineIdx < MAX_LINES - 1; a++) {
            for (let b = a + 1; b < clusterPoints.length && lineIdx < MAX_LINES - 1; b++) {
              const pa = clusterPoints[a], pb = clusterPoints[b];
              const dx = pa.px - pb.px, dy = pa.py - pb.py, dz = pa.pz - pb.pz;
              const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
              const CONN_DIST = 9;
              if (dist < CONN_DIST) {
                const alpha = (1 - dist / CONN_DIST) * (pa.phase) * 0.18;
                const base  = lineIdx * 2;
                const posB  = base * 3;
                linePosArr[posB]     = pa.px; linePosArr[posB+1] = pa.py; linePosArr[posB+2] = pa.pz;
                linePosArr[posB+3]   = pb.px; linePosArr[posB+4] = pb.py; linePosArr[posB+5] = pb.pz;
                lineAlphaArr[base]   = alpha;
                lineAlphaArr[base+1] = alpha;
                lineIdx++;
              }
            }
          }
        }
      });

      /* Write GPU buffers */
      points.forEach((p, i) => {
        positions[i*3]   = p.px;
        positions[i*3+1] = p.py;
        positions[i*3+2] = p.pz;

        /* Intensity = closeness to cluster centre */
        const c  = CLUSTERS[p.clusterIdx].center;
        const dx = p.px - c.x, dy = p.py - c.y, dz = p.pz - c.z;
        const d  = Math.sqrt(dx*dx + dy*dy + dz*dz);
        intensities[i] = Math.max(0, 1 - d / 14) * p.phase;
      });

      (geo.attributes.position  as THREE.BufferAttribute).needsUpdate = true;
      (geo.attributes.intensity as THREE.BufferAttribute).needsUpdate = true;

      lineGeo.setDrawRange(0, lineIdx * 2);
      (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeo.attributes.alpha    as THREE.BufferAttribute).needsUpdate = true;

      /* Label fade-in when clustered */
      labelSprites.forEach((sp, i) => {
        const avgPhase = points.filter(p => p.clusterIdx === i).reduce((s,p) => s + p.phase, 0)
          / CLUSTERS[i].count;
        sp.material.opacity = Math.max(0, (avgPhase - 0.7) / 0.3);
      });

      /* Rotate the whole group */
      if (!isDragging) {
        velY *= 0.96;
        velX *= 0.96;
        velY += 0.00045;          /* gentle base spin */
      }
      rotY += velY;
      rotX += velX;
      rotX = Math.max(-0.55, Math.min(0.55, rotX));

      particleMesh.rotation.y = rotY;
      particleMesh.rotation.x = rotX;
      lineSegs.rotation.y = rotY;
      lineSegs.rotation.x = rotX;
      labelSprites.forEach(sp => {
        sp.rotation.y = rotY;
        sp.rotation.x = rotX;
      });

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
      renderer.domElement.removeEventListener("mousedown",  onMouseDown);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchend",  onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
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

export default EmbeddingSpaceCanvas;
