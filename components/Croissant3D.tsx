"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function CroissantMesh({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const geo = new THREE.TorusGeometry(1.15, 0.46, 42, 90, Math.PI * 1.45);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const n = v.clone().normalize();
      const bump =
        Math.sin(v.x * 9) * 0.028 +
        Math.sin(v.y * 14 + v.z * 6) * 0.02 +
        Math.sin(v.z * 11) * 0.018;
      v.addScaledVector(n, bump);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  const tips = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 3; i++) {
      const a = -0.15 + i * 0.55;
      positions.push([Math.cos(a) * 1.15, Math.sin(a) * 1.15 * 0.4, 0.1 * i]);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    const targetX = pointer.current.y * 0.18;
    const targetY = group.current.rotation.y + pointer.current.x * 0.0006;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
  });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX - window.innerWidth / 2;
      pointer.current.y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.9}>
      <group ref={group} rotation={[0.35, 0.6, 0.15]} scale={mobile ? 1.15 : 1.4}>
        <mesh geometry={geometry} castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#c9863f"
            roughness={0.52}
            metalness={0.05}
            clearcoat={0.4}
            clearcoatRoughness={0.35}
            sheen={0.6}
            sheenColor="#f2d9a8"
          />
        </mesh>
        {tips.map((p, i) => (
          <mesh key={i} position={p} scale={0.34 - i * 0.06}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshPhysicalMaterial color="#a86a2e" roughness={0.6} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function FlourDust() {
  const points = useMemo(() => {
    const arr = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#f3e7cf" size={0.02} transparent opacity={0.5} />
    </points>
  );
}

function Rig({ mobile }: { mobile: boolean }) {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, mobile ? 6.2 : 5.4);
  }, [camera, mobile]);
  return null;
}

export default function Croissant3D() {
  const [mobile, setMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setMobile(window.innerWidth < 768);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={mobile ? [1, 1.3] : [1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Rig mobile={mobile} />
        <ambientLight intensity={0.65} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} castShadow />
        <directionalLight position={[-4, -2, -3]} intensity={0.3} color="#e7b98a" />
        <CroissantMesh mobile={mobile} />
        {!mobile && <FlourDust />}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
