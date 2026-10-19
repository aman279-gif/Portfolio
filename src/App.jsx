import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import StarBackground from './components/StarBackground';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ProblemSolving from './sections/ProblemSolving';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Community from './sections/Community';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <StarBackground />
          <ScrollProgress />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ProblemSolving />
            <Education />
            <Certifications />
            <Community />
            <Contact />
          </main>

          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
