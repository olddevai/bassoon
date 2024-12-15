import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function Scene() {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
  
  return (
    <primitive 
      object={computer.scene} 
      scale={[0.7, 0.7, 0.7]}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="h-screen w-full relative">
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Scene />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white z-10"
        >
          <h1 className="text-6xl font-bold mb-4">John Doe</h1>
          <p className="text-xl mb-8">Full Stack Developer & 3D Enthusiast</p>
          
          <div className="flex gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Contact Me
            </motion.a>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full backdrop-blur-sm"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:contact@example.com"
                className="bg-white/10 p-3 rounded-full backdrop-blur-sm"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}