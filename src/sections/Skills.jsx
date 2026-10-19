import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { FaCode, FaLayerGroup, FaServer, FaDatabase, FaTools, FaBrain, FaReact, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiC, SiLeetcode } from 'react-icons/si';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'code': return <FaCode className="text-2xl" />;
    case 'layout': return <FaLayerGroup className="text-2xl" />;
    case 'server': return <FaServer className="text-2xl" />;
    case 'database': return <FaDatabase className="text-2xl" />;
    case 'layers': return <FaReact className="text-2xl" />;
    case 'tool': return <FaTools className="text-2xl" />;
    case 'brain': return <FaBrain className="text-2xl" />;
    default: return <FaCode className="text-2xl" />;
  }
};

const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'SiCplusplus': return <SiCplusplus />;
    case 'SiJavascript': return <SiJavascript />;
    case 'SiHtml5': return <SiHtml5 />;
    case 'SiCss': return <SiCss />;
    case 'SiReact': return <SiReact />;
    case 'SiNodedotjs': return <SiNodedotjs />;
    case 'SiExpress': return <SiExpress />;
    case 'SiMongodb': return <SiMongodb />;
    case 'SiGit': return <SiGit />;
    case 'SiGithub': return <SiGithub />;
    case 'FaJava': return <FaJava />;
    case 'SiC': return <SiC />;
    case 'SiLeetcode': return <SiLeetcode />;
    default: return <FaCode />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] cursor-default"
                  >
                    <span className="text-blue-400/80">
                      {getSkillIcon(skill.icon)}
                    </span>
                    <span className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
