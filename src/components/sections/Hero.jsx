import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlowBadge from '../ui/GlowBadge';
import TerminalText from '../ui/TerminalText';

// Framer Motion variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-6 relative z-10"
      >
        <motion.div variants={itemVariants}>
          <TerminalText lines={["initializing portfolio..."]} speed={50} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-purple-soft)] to-[var(--color-blue-soft)]"
        >
          Téo Hallé
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] font-light max-w-2xl"
        >
          AI & Software Engineer · EPITA 2026
        </motion.h2>

        <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mt-2">
          <GlowBadge label="GenAI" color="purple" />
          <GlowBadge label="Agentic AI" color="blue" />
          <GlowBadge label="DevOps" color="cyan" />
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 mt-8 flex-wrap">
          <a 
            href="#chatcv" 
            className="px-6 py-3 rounded-xl font-medium bg-[var(--color-purple-glow)]/10 text-white border border-[var(--color-purple-glow)]/50 hover:bg-[var(--color-purple-glow)]/30 hover:shadow-[var(--shadow-purple-glow)] hover:-translate-y-1 transition-all duration-300"
          >
            Chat with my CV →
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-xl font-medium bg-white/5 text-[var(--color-text-primary)] border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-[var(--color-text-dim)] uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-3 h-3 border-b-2 border-r-2 border-[var(--color-text-dim)] transform rotate-45"
        />
      </motion.div>
    </SectionWrapper>
  );
}