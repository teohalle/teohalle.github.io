import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function GlassCard({ children, className, hover = false, glow = false }) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-[var(--radius-glass)] p-6 transition-shadow duration-300",
        glow && "hover:shadow-[var(--shadow-purple-glow)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}