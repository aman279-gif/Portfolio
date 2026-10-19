import React from 'react';
import { motion } from 'framer-motion';
import { HiUserGroup, HiCheckCircle } from 'react-icons/hi2';
import { communityExperience } from '../data/portfolioData';

const Community = () => {
  return (
    <section id="community" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Leadership & Community
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Making an impact beyond code
          </p>
        </motion.div>

        <div className="space-y-8">
          {communityExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 overflow-hidden group"
            >
              {/* Left gradient border accent */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <HiUserGroup className="w-7 h-7" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-100">{exp.title}</h3>
                    {exp.date && (
                      <span className="text-slate-500 text-sm mt-1 md:mt-0 whitespace-nowrap">{exp.date}</span>
                    )}
                  </div>
                  
                  {exp.role && (
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
                      {exp.role}
                    </div>
                  )}
                  
                  {exp.description && (
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                  
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-2 mt-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <HiCheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 italic">
            Open to new opportunities and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
