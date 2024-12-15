import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';

export default function ParticleField({ count = 1000 }) {
  const points = useRef<Points>(null);

  useFrame((state) => {
    if (!points.current) return;
    // Rotate the particle system over time
    points.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  // Generate positions for particles
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10; // x position
    positions[i + 1] = (Math.random() - 0.5) * 10; // y position
    positions[i + 2] = (Math.random() - 0.5) * 10; // z position
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1} // Adjust particle size here
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6} // Adjust opacity
      />
    </points>
  );
}
