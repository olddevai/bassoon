import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingCube from '../3d/FloatingCube';
import FloatingSphere from '../3d/FloatingSphere';

const skills = [
  { name: 'React', color: '#61dafb', position: [-2, 0, 0] },
  { name: 'Three.js', color: '#049ef4', position: [2, 0, 0] },
  { name: 'TypeScript', color: '#3178c6', position: [0, 2, 0] },
  { name: 'WebGL', color: '#990000', position: [0, -2, 0] },
];

export default function Skills3D() {
  return (
    <div className="h-[400px]">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {skills.map((skill, index) => (
          index % 2 === 0 ? (
            <FloatingCube key={skill.name} position={skill.position} color={skill.color} />
          ) : (
            <FloatingSphere key={skill.name} position={skill.position} color={skill.color} />
          )
        ))}
        
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}