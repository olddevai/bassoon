import React, { Suspense, lazy } from 'react';

// Lazy load components
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="bg-black text-white">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        }
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
