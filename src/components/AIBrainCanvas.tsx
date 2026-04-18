import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  size?: number;
}

const AIBrainCanvas = ({ size = 420 }: Props) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth || size;
    const H = mount.clientHeight || size;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 500);
    camera.position.z = 80;

    // ── Core glow sphere ─────────────────────────────────────────────────────
    const coreMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
          float pulse = 0.5 + 0.5 * sin(time * 1.5);
          vec3 innerColor = vec3(0.42, 0.22, 0.88);
          vec3 outerColor = vec3(0.06, 0.71, 0.83);
          vec3 color = mix(innerColor, outerColor, fresnel);
          float alpha = fresnel * (0.55 + 0.2 * pulse);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const coreSphere = new THREE.Mesh(new THREE.SphereGeometry(18, 64, 64), coreMat);
    scene.add(coreSphere);

    // Inner solid
    const innerMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        void main() {
          float pulse = 0.5 + 0.5 * sin(time * 2.0);
          gl_FragColor = vec4(0.18, 0.1, 0.35, 0.4 + 0.1 * pulse);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32), innerMat));

    // ── Orbiting rings ───────────────────────────────────────────────────────
    const rings: THREE.Mesh[] = [];
    const ringConfigs = [
      { radius: 24, tube: 0.25, rot: new THREE.Euler(0.3, 0, 0), color: 0x8b5cf6, speed: 0.4 },
      { radius: 30, tube: 0.18, rot: new THREE.Euler(1.2, 0.6, 0), color: 0x06b6d4, speed: -0.25 },
      { radius: 36, tube: 0.12, rot: new THREE.Euler(0.7, 1.4, 0.5), color: 0xc084fc, speed: 0.18 },
    ];

    ringConfigs.forEach((cfg) => {
      const geo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const mat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.copy(cfg.rot);
      scene.add(ring);
      rings.push(ring);
    });

    // ── Neural node particles on sphere surface ──────────────────────────────
    const NODE_COUNT = 200;
    const nodePositions = new Float32Array(NODE_COUNT * 3);
    const nodeSizes = new Float32Array(NODE_COUNT);
    const nodeColors = new Float32Array(NODE_COUNT * 3);
    const nodePhases = new Float32Array(NODE_COUNT);

    for (let i = 0; i < NODE_COUNT; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 20 + Math.random() * 14;

      nodePositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = r * Math.cos(phi);

      nodeSizes[i] = 1.2 + Math.random() * 2;
      nodePhases[i] = Math.random() * Math.PI * 2;

      const t = Math.random();
      nodeColors[i * 3]     = 0.54 + t * (0.06 - 0.54);
      nodeColors[i * 3 + 1] = 0.36 + t * (0.71 - 0.36);
      nodeColors[i * 3 + 2] = 0.96 + t * (0.83 - 0.96);
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute("size", new THREE.BufferAttribute(nodeSizes, 1));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
    nodeGeo.setAttribute("phase", new THREE.BufferAttribute(nodePhases, 1));

    const nodeShader = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        attribute float phase;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        void main() {
          vColor = color;
          float pulse = 0.7 + 0.3 * sin(time * 2.0 + phase);
          vAlpha = pulse;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * pulse * (200.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float a = (1.0 - r * 2.0) * vAlpha;
          gl_FragColor = vec4(vColor, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const nodeGroup = new THREE.Points(nodeGeo, nodeShader);
    scene.add(nodeGroup);

    // ── Connection lines between nearby surface nodes ─────────────────────────
    const connPositions: number[] = [];
    const CONN_DIST = 14;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = nodePositions[i * 3] - nodePositions[j * 3];
        const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
        const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONN_DIST) {
          connPositions.push(
            nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2],
            nodePositions[j * 3], nodePositions[j * 3 + 1], nodePositions[j * 3 + 2]
          );
        }
      }
    }

    const connGeo = new THREE.BufferGeometry();
    connGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(connPositions), 3));
    const connMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const connLines = new THREE.LineSegments(connGeo, connMat);
    scene.add(connLines);

    // ── Outer halo ───────────────────────────────────────────────────────────
    const haloMat = new THREE.ShaderMaterial({
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
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 4.0);
          float pulse = 0.5 + 0.5 * sin(time * 0.8);
          gl_FragColor = vec4(0.54, 0.36, 0.96, fresnel * 0.25 * pulse);
        }
      `,
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(44, 32, 32), haloMat));

    // ── Mouse interaction ────────────────────────────────────────────────────
    let targetRotX = 0;
    let targetRotY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetRotY = ((e.clientX - cx) / rect.width) * 0.8;
      targetRotX = -((e.clientY - cy) / rect.height) * 0.6;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Render loop ──────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;
    const group = new THREE.Group();
    group.add(coreSphere, nodeGroup, connLines, ...rings);
    scene.add(group);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      coreMat.uniforms.time.value = t;
      innerMat.uniforms.time.value = t;
      haloMat.uniforms.time.value = t;
      nodeShader.uniforms.time.value = t;

      // Smooth rotation toward mouse
      group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

      // Slow base rotation
      group.rotation.y += 0.002;

      rings.forEach((ring, i) => {
        ring.rotation.z += ringConfigs[i].speed * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ───────────────────────────────────────────────────────────────
    const handleResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      ro.disconnect();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", minHeight: size }}
      className="select-none"
    />
  );
};

export default AIBrainCanvas;
