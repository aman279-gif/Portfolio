import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, aboutText } from '../data/portfolioData';

const StatCard = ({ title, value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
  >
    <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 mb-1">
      {value}
    </div>
    <div className="text-xs md:text-sm text-slate-400 font-medium">{title}</div>
  </motion.div>
);

const About = () => {
  const stats = [
    { title: "Education", value: "3rd Year" },
    { title: "Specialty", value: "MERN Stack" },
    { title: "DSA Practice", value: "C++" }
  ];

  const skills = ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "C++", "Java", "JavaScript", "Git"];

  return (
    <SectionWrapper id="about" className="py-24">
      <div className="mb-12 md:mb-20 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto md:mx-0 origin-left"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          {/* Decorative elements behind card */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl z-0" />
          
          <div className="relative z-10 p-[2px] rounded-3xl bg-gradient-to-br from-indigo-500/30 via-white/5 to-violet-500/30 backdrop-blur-md">
            <div className="bg-[#0a0a1a]/90 rounded-[22px] p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-[3px] mb-6 shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center border-4 border-[#0a0a1a]">
                  <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-violet-300">
                    AM
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{personalInfo?.name || "Aman Maurya"}</h3>
              <p className="text-indigo-400 font-medium mb-8">CS Engineering Student</p>
              
              <div className="w-full grid grid-cols-3 gap-3">
                {stats.map((stat, idx) => (
                  <StatCard key={idx} index={idx} title={stat.title} value={stat.value} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed mb-10 relative">
             <div className="absolute -top-10 -left-6 text-6xl text-indigo-500/10 font-serif leading-none select-none">"</div>
            {aboutText?.map((paragraph, idx) => (
              <p key={idx} className="relative z-10">{paragraph}</p>
            )) || <p>3rd-year Computer Science Engineering student focused on full-stack development, problem solving, and building modern web applications.</p>}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-slate-200 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-300 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
