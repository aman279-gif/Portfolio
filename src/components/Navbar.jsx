import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useCustomHooks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Create an array of section IDs from navLinks
  const sectionIds = navLinks.map(link => link.id || link.name.toLowerCase().replace(/\s+/g, '-'));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 tracking-tighter">
              AM
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link, idx) => {
              const id = link.id || link.name.toLowerCase().replace(/\s+/g, '-');
              const isActive = activeSection === id;
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleNavClick(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label || link.name}
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block transition-all"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-black/60 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, idx) => {
                const id = link.id || link.name.toLowerCase().replace(/\s+/g, '-');
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(id)}
                    className={`text-2xl font-medium tracking-wide ${
                      isActive
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label || link.name}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
