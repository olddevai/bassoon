import { Suspense } from 'react';
import Hero from './components/sections/Hero';
import About from './components/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      }>
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