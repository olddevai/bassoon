import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';

function SkillSphere({ position, skill }: { position: [number, number, number]; skill: string }) {
  return (
    <group position={position}>
      <Text3D
        font="/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        {skill}
        <meshStandardMaterial color="white" />
      </Text3D>
    </group>
  );
}

export default function About() {
  const skills = ['React', 'Node.js', 'TypeScript', 'Three.js', 'WebGL', 'AWS'];

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-xl max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building immersive web experiences.
            My journey in tech has led me to master both frontend and backend technologies,
            with a special focus on 3D web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-gray-300">
                5+ years of professional experience in web development,
                specializing in React, Three.js, and full-stack applications.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-300">
                B.S. in Computer Science
                <br />
                Master's in Software Engineering
              </p>
            </div>
          </motion.div>

          <div className="h-[400px]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {skills.map((skill, index) => (
                <SkillSphere
                  key={skill}
                  position={[
                    Math.cos(index * (Math.PI * 2) / skills.length) * 2,
                    Math.sin(index * (Math.PI * 2) / skills.length) * 2,
                    0
                  ]}
                  skill={skill}
                />
              ))}
              <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
