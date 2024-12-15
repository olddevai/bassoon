import { motion } from 'framer-motion';
import Skills3D from './Skills3D';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Three.js', 'WebGL', 'Tailwind CSS', 'GSAP']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs', 'WebSockets']
  },
  {
    title: '3D & Graphics',
    skills: ['Three.js', 'WebGL', 'GLSL', 'Blender', '3D Modeling', 'Animation']
  }
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">Skills & Expertise</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Specialized in creating immersive web experiences with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Skills3D />
          </div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}