import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`w-full max-w-7xl mx-auto px-6 py-20 md:py-32 scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
