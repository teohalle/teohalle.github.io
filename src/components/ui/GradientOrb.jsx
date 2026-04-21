import { motion } from 'framer-motion';

export default function GradientOrb({ color, size = "600px", top, left, right, bottom }) {
  const bgColor = color === 'purple' ? 'var(--color-purple-glow)' : 'var(--color-blue-glow)';
  
  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-0 blur-[120px] opacity-20"
      style={{ 
        width: size, 
        height: size, 
        top, left, right, bottom, 
        backgroundColor: bgColor 
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}