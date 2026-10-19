import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { useTilt } from '../hooks/useCustomHooks';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const tiltRef = useRef(null);
  useTilt(tiltRef, { max: 10, speed: 400, scale: 1.02 });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } }
      }}
      className="group relative"
    >
      <div 
        ref={tiltRef}
        className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm flex flex-col hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-white/20 transition-all duration-300"
      >
        <div className="relative h-48 w-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-b border-white/10 overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaCode className="text-5xl text-white/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags && project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Things I've built
          </motion.p>
        </div>

        {projects && projects.length > 0 ? (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-10 md:p-16 text-center backdrop-blur-md"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-8 border border-white/5">
              <FaCode className="text-4xl text-blue-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Projects Coming Soon</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              I'm currently working on some exciting projects. Check back soon or visit my GitHub for the latest updates and open-source contributions.
            </p>
            <a
              href="https://github.com/aman279-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <FaGithub className="text-xl" />
              Visit My GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
