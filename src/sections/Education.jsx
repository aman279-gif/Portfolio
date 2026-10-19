import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-500/20 to-violet-500/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Gradient glow border wrapper */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/40 to-violet-500/40 rounded-2xl blur opacity-50" />

              <div className="relative p-8 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-indigo-500/40 transition-colors group">

                {/* Top badge row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  {item.period && (
                    <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-sm rounded-full">
                      {item.period}
                    </span>
                  )}
                  {item.status && (
                    <span className={`px-3 py-1 text-sm rounded-full flex items-center gap-1.5 ${
                      item.current
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      {item.current && (
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse inline-block" />
                      )}
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Degree */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="text-lg text-neutral-300 mb-4">{item.institution}</p>

                {/* Description */}
                {item.description && (
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
