import { motion } from 'framer-motion';
import ProjectCard3D from './ProjectCard3D';

const projects = [
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D product customization tool built with Three.js and React',
    tech: ['React', 'Three.js', 'WebGL', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800&h=450',
    color: '#61dafb'
  },
  {
    title: 'AI-Powered Portfolio Generator',
    description: 'Generate personalized portfolio websites using AI and 3D graphics',
    tech: ['Next.js', 'Three.js', 'OpenAI', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&h=450',
    color: '#049ef4'
  },
  {
    title: 'WebGL Game Engine',
    description: 'Custom WebGL-based game engine for browser-based 3D games',
    tech: ['WebGL', 'TypeScript', 'Web Workers', 'WebAssembly'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=800&h=450',
    color: '#990000'
  }
];

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
            <ProjectCard3D key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}