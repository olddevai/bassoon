import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, Float32BufferAttribute } from 'three';

export default function ParticleField({ count = 1000 }) {
  const points = useRef<Points>(null);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  const particleGeometry = new BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  particleGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

  return (
    <points ref={points}>
      <bufferGeometry {...particleGeometry} />
      <pointsMaterial size={0.02} color="#ffffff" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}