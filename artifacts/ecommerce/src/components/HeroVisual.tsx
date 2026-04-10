import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Environment, Float } from '@react-three/drei';
import type { Mesh } from 'three';

function GemShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.18;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.28;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#6d28d9"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.92}
        />
      </Icosahedron>

      {/* Inner glowing core */}
      <Icosahedron args={[1.0, 2]}>
        <MeshDistortMaterial
          color="#818cf8"
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.35}
        />
      </Icosahedron>
    </Float>
  );
}

export default function HeroVisual() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] lg:h-full lg:min-h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#c4b5fd" />
        <directionalLight position={[-5, -3, -5]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[0, 3, 2]} intensity={2} color="#a78bfa" />

        <Environment preset="city" />

        <GemShape />
      </Canvas>
    </div>
  );
}
