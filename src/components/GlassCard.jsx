import React from 'react';
import { useTilt } from '../hooks/useCustomHooks';

const GlassCard = ({ children, className = '', tilt = false }) => {
  const cardRef = React.useRef(null);
  useTilt(tilt ? cardRef : { current: null });

  return (
    <div
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
