import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014]"
      onAnimationComplete={() => {
        // Option to trigger something when loader disappears
      }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 tracking-tighter"
        >
          AM
        </motion.div>
        
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            onAnimationComplete={onLoadingComplete}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
