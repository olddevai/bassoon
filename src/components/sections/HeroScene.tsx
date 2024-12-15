import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ParticleField from '../3d/ParticleField';
import FloatingCube from '../3d/FloatingCube';
import FloatingSphere from '../3d/FloatingSphere';

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <ParticleField count={2000} />
      
      <FloatingCube position={[-2, 0, 0]} color="#61dafb" />
      <FloatingSphere position={[2, 0, 0]} color="#049ef4" />
      
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}