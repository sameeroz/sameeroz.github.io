import { useEffect, useRef } from "react";
import * as THREE from "three";

interface NeuralNode {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  originalPosition: THREE.Vector3;
  phase: number;
  speed: number;
}

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ───────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 180;

    // ── Mouse ────────────────────────────────────────────────────────────────
    const mouse = new THREE.Vector2(0, 0);
    const targetCamOffset = new THREE.Vector2(0, 0);
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Neural Nodes ─────────────────────────────────────────────────────────
    const NODE_COUNT = 120;
    const SPREAD = 160;
    const nodes: NeuralNode[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * SPREAD,
        (Math.random() - 0.5) * SPREAD,
        (Math.random() - 0.5) * SPREAD * 0.6
      );
      nodes.push({
        position: pos.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.04
        ),
        originalPosition: pos.clone(),
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.7,
      });
    }

    // ── Node Geometry ────────────────────────────────────────────────────────
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(NODE_COUNT * 3);
    const nodeSizes = new Float32Array(NODE_COUNT);
    const nodeColors = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      const p = nodes[i].position;
      nodePositions[i * 3] = p.x;
      nodePositions[i * 3 + 1] = p.y;
      nodePositions[i * 3 + 2] = p.z;
      nodeSizes[i] = 2 + Math.random() * 4;

      // Violet / Cyan colour split
      const isCyan = Math.random() > 0.5;
      if (isCyan) {
        nodeColors[i * 3] = 0.06; nodeColors[i * 3 + 1] = 0.71; nodeColors[i * 3 + 2] = 0.83;
      } else {
        nodeColors[i * 3] = 0.54; nodeColors[i * 3 + 1] = 0.36; nodeColors[i * 3 + 2] = 0.96;
      }
    }

    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute("size", new THREE.BufferAttribute(nodeSizes, 1));
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    const nodeMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float dist = length(mvPosition.xyz);
          vAlpha = smoothstep(200.0, 80.0, dist) * 0.9;
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.3, r);
          float glow = 1.0 - smoothstep(0.2, 0.5, r);
          float alpha = (core * 0.9 + glow * 0.5) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // ── Connection Lines ─────────────────────────────────────────────────────
    const MAX_CONN = 300;
    const linePositions = new Float32Array(MAX_CONN * 2 * 3);
    const lineAlphas = new Float32Array(MAX_CONN * 2);
    const lineColors = new Float32Array(MAX_CONN * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute("alpha", new THREE.BufferAttribute(lineAlphas, 1).setUsage(THREE.DynamicDrawUsage));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const lineMaterial = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: `
        attribute float alpha;
        attribute vec3 color;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vAlpha = alpha;
          vColor = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // ── Data Pulses along connections ────────────────────────────────────────
    const PULSE_COUNT = 40;
    const pulseGeometry = new THREE.BufferGeometry();
    const pulsePos = new Float32Array(PULSE_COUNT * 3);
    const pulseAlphas = new Float32Array(PULSE_COUNT);
    pulseGeometry.setAttribute("position", new THREE.BufferAttribute(pulsePos, 3).setUsage(THREE.DynamicDrawUsage));
    pulseGeometry.setAttribute("alpha", new THREE.BufferAttribute(pulseAlphas, 1).setUsage(THREE.DynamicDrawUsage));

    const pulseMaterial = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 4.0 * (200.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float a = (1.0 - r * 2.0) * vAlpha;
          gl_FragColor = vec4(1.0, 1.0, 1.0, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const pulseMesh = new THREE.Points(pulseGeometry, pulseMaterial);
    scene.add(pulseMesh);

    // Track active connections for pulse routing
    interface Connection { a: number; b: number; dist: number }
    let activeConns: Connection[] = [];

    // Pulse state
    interface Pulse { conn: number; t: number; speed: number }
    const pulses: Pulse[] = Array.from({ length: PULSE_COUNT }, (_, i) => ({
      conn: i % Math.max(activeConns.length, 1),
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.005,
    }));

    // ── Ambient fog sphere ───────────────────────────────────────────────────
    const fogGeo = new THREE.SphereGeometry(90, 32, 32);
    const fogMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x6c3ce0),
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(fogGeo, fogMat));

    // ── Clock & Animation Loop ───────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    const updateConnections = (time: number) => {
      const CONNECT_DIST = 42;
      let connIdx = 0;
      activeConns = [];

      for (let i = 0; i < NODE_COUNT && connIdx < MAX_CONN; i++) {
        for (let j = i + 1; j < NODE_COUNT && connIdx < MAX_CONN; j++) {
          const dx = nodes[i].position.x - nodes[j].position.x;
          const dy = nodes[i].position.y - nodes[j].position.y;
          const dz = nodes[i].position.z - nodes[j].position.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.25;
            const base = connIdx * 2;
            const posBase = base * 3;

            linePositions[posBase]     = nodes[i].position.x;
            linePositions[posBase + 1] = nodes[i].position.y;
            linePositions[posBase + 2] = nodes[i].position.z;
            linePositions[posBase + 3] = nodes[j].position.x;
            linePositions[posBase + 4] = nodes[j].position.y;
            linePositions[posBase + 5] = nodes[j].position.z;

            lineAlphas[base] = alpha;
            lineAlphas[base + 1] = alpha;

            // Colour gradient violet → cyan
            const t = (nodes[i].position.x + SPREAD / 2) / SPREAD;
            lineColors[posBase]     = 0.54 + t * (0.06 - 0.54);
            lineColors[posBase + 1] = 0.36 + t * (0.71 - 0.36);
            lineColors[posBase + 2] = 0.96 + t * (0.83 - 0.96);
            lineColors[posBase + 3] = lineColors[posBase];
            lineColors[posBase + 4] = lineColors[posBase + 1];
            lineColors[posBase + 5] = lineColors[posBase + 2];

            activeConns.push({ a: i, b: j, dist });
            connIdx++;
          }
        }
      }

      lineGeometry.setDrawRange(0, connIdx * 2);
      (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (lineGeometry.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
      (lineGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
    };

    const updatePulses = () => {
      if (activeConns.length === 0) return;
      for (let i = 0; i < PULSE_COUNT; i++) {
        const pulse = pulses[i];
        pulse.t += pulse.speed;
        if (pulse.t > 1) {
          pulse.t = 0;
          pulse.conn = Math.floor(Math.random() * activeConns.length);
          pulse.speed = 0.002 + Math.random() * 0.005;
        }

        const conn = activeConns[pulse.conn % activeConns.length];
        if (!conn) continue;
        const a = nodes[conn.a].position;
        const b = nodes[conn.b].position;
        const t = pulse.t;

        pulsePos[i * 3]     = a.x + (b.x - a.x) * t;
        pulsePos[i * 3 + 1] = a.y + (b.y - a.y) * t;
        pulsePos[i * 3 + 2] = a.z + (b.z - a.z) * t;

        pulseAlphas[i] = Math.sin(t * Math.PI) * 0.8;
      }
      (pulseGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (pulseGeometry.attributes.alpha as THREE.BufferAttribute).needsUpdate = true;
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      nodeMaterial.uniforms.time.value = time;

      // Move nodes
      for (let i = 0; i < NODE_COUNT; i++) {
        const n = nodes[i];
        const t = time * n.speed + n.phase;
        n.position.x = n.originalPosition.x + Math.sin(t * 0.5) * 8;
        n.position.y = n.originalPosition.y + Math.cos(t * 0.4) * 8;
        n.position.z = n.originalPosition.z + Math.sin(t * 0.3) * 4;

        nodePositions[i * 3]     = n.position.x;
        nodePositions[i * 3 + 1] = n.position.y;
        nodePositions[i * 3 + 2] = n.position.z;
      }
      (nodeGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      updateConnections(time);
      updatePulses();

      // Smooth camera parallax
      targetCamOffset.x += (mouse.x * 12 - targetCamOffset.x) * 0.04;
      targetCamOffset.y += (mouse.y * 8 - targetCamOffset.y) * 0.04;
      camera.position.x = targetCamOffset.x;
      camera.position.y = targetCamOffset.y;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ───────────────────────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.75 }}
    />
  );
};

export default ThreeBackground;
