import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D product customization tool built with Three.js and React',
    tech: ['React', 'Three.js', 'WebGL', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800&h=450'
  },
  {
    title: 'AI-Powered Portfolio Generator',
    description: 'Generate personalized portfolio websites using AI and 3D graphics',
    tech: ['Next.js', 'Three.js', 'OpenAI', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&h=450'
  },
  {
    title: 'WebGL Game Engine',
    description: 'Custom WebGL-based game engine for browser-based 3D games',
    tech: ['WebGL', 'TypeScript', 'Web Workers', 'WebAssembly'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=800&h=450'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/10 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my expertise in 3D web development
            and full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}