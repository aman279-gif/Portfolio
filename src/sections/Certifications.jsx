import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiArrowRight } from 'react-icons/hi2';
import { certifications } from '../data/portfolioData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Continuous learning and skill validation through industry-recognized certifications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              {/* Top gradient border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <HiAcademicCap className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-2">{cert.title}</h3>
              {cert.issuer && (
                <p className="text-slate-400 text-sm mb-4 font-medium">{cert.issuer}</p>
              )}
              {cert.date && (
                <p className="text-slate-500 text-sm mb-6">{cert.date}</p>
              )}
              
              {cert.link && (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-auto group/link"
                >
                  View Certificate 
                  <HiArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
