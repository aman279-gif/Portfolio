import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { personalInfo, socialLinks } from '../data/portfolioData';

// Typing effect words
const TYPING_WORDS = [
  'MERN Stack Developer',
  'DSA in C++',
  'Problem Solver',
  'CS Engineering Student',
  'Full Stack Developer'
];

const TypewriterText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        // Pause at the end of word before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      } else {
        const nextText = isDeleting 
          ? word.substring(0, currentText.length - 1)
          : word.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="text-violet-400 font-medium">
      {currentText}
      <span className="animate-pulse font-light">|</span>
    </span>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[2, 0.6, 128, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          wireframe
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const DecorativeCode = ({ text, style, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 0.15, y: 0 }}
    transition={{ delay, duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
    className="absolute text-xs md:text-sm font-mono text-white/50 backdrop-blur-sm bg-white/5 px-3 py-2 rounded-lg border border-white/10 select-none hidden md:block z-0"
    style={style}
  >
    {text}
  </motion.div>
);

const Hero = () => {
  const githubLink = socialLinks?.github || 'https://github.com/aman279-gif';
  const leetcodeLink = socialLinks?.leetcode || 'https://leetcode.com/u/mauryaman/';
  const linkedinLink = socialLinks?.linkedin || 'https://www.linkedin.com/in/aman-maurya-279as';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-6 sm:px-12 md:px-20 lg:px-24">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
      
      {/* Decorative code snippets */}
      <DecorativeCode text="const hero = () => { return <Awesome /> }" style={{ top: '25%', right: '15%' }} delay={0} />
      <DecorativeCode text="git commit -m 'Initial awesomeness'" style={{ bottom: '25%', left: '8%' }} delay={1.5} />
      <DecorativeCode text="npm run dev" style={{ top: '20%', left: '10%' }} delay={2} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left side text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left order-2 lg:order-1 relative z-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
              {personalInfo?.name || "Aman Maurya"}
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold text-slate-300 mb-6 h-8">
            <TypewriterText />
          </motion.div>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            3rd-year Computer Science Engineering student focused on full-stack development, problem solving, and building modern web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
              View My Work
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center gap-2 transform hover:-translate-y-1">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center gap-2 transform hover:-translate-y-1">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              LeetCode
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center gap-2 transform hover:-translate-y-1">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right side 3D Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="h-[350px] md:h-[450px] lg:h-[650px] w-full order-1 lg:order-2 absolute lg:relative z-0 lg:z-10 opacity-25 lg:opacity-100 right-0 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:right-auto pointer-events-none lg:pointer-events-auto"
        >
          <React.Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
            </div>
          }>
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
              <FloatingGeometry />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
            </Canvas>
          </React.Suspense>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
