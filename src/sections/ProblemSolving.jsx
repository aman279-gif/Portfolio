import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCplusplus } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Animated Decorative Symbols */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 text-6xl text-neutral-600 font-mono font-bold select-none z-0"
      >
        {"{ }"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-10 text-6xl text-neutral-600 font-mono font-bold select-none z-0"
      >
        {"< />"}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Solving</span>
          </h2>
          <p className="text-xl text-neutral-400 font-medium italic mb-6">
            "Always Learning, Always Solving"
          </p>
          <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed text-lg">
            I actively practice Data Structures & Algorithms primarily in <span className="text-indigo-400 font-semibold">C++</span> to strengthen my analytical thinking and algorithmic problem-solving skills. LeetCode is my primary platform for consistent practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/50 to-orange-500/50 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative h-full flex flex-col items-center p-8 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <SiLeetcode className="text-4xl text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">LeetCode Profile</h3>
              <p className="text-neutral-400 mb-4 font-mono">@mauryaman</p>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300 mb-6">
                <SiCplusplus className="text-sm text-blue-400" />
                <span>DSA with C++</span>
              </div>
              
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-neutral-800 hover:bg-neutral-700 border border-white/5 rounded-lg text-white font-medium transition-colors w-full text-center flex items-center justify-center gap-2 group-hover:border-yellow-500/50"
              >
                View LeetCode Profile
              </a>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative h-full flex flex-col items-center p-8 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <FaGithub className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">GitHub Profile</h3>
              <p className="text-neutral-400 mb-8 font-mono">@aman279-gif</p>
              
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-neutral-800 hover:bg-neutral-700 border border-white/5 rounded-lg text-white font-medium transition-colors w-full text-center flex items-center justify-center gap-2 group-hover:border-indigo-500/50"
              >
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
