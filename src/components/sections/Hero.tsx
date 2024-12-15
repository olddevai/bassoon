import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute inset-0">
        <HeroScene />
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
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:contact@example.com" icon={<Mail />} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
    >
      {icon}
    </motion.a>
  );
}