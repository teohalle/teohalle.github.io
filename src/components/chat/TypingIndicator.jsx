import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start mb-4"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center h-10 shadow-lg backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-purple-soft)] animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-purple-soft)] animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-purple-soft)] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </motion.div>
  );
}