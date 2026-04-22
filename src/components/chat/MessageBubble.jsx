import { motion } from 'framer-motion';
import clsx from 'clsx';
import useTypewriter from '../../hooks/useTypewriter';

export default function MessageBubble({ role, content, isStreaming }) {
  const isUser = role === 'user';
  
  // Use the typewriter hook if it's the assistant and it's flagged to stream
  const { displayedText } = useTypewriter(content, isUser || !isStreaming ? 0 : 15);
  const textToShow = isUser || !isStreaming ? content : displayedText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={clsx(
        "max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-3 text-sm md:text-base whitespace-pre-wrap shadow-lg backdrop-blur-md transition-all",
        isUser 
          ? "bg-[var(--color-purple-glow)]/20 border border-[var(--color-purple-glow)]/30 text-white rounded-tr-sm" 
          : "bg-white/5 border border-white/10 text-[var(--color-text-primary)] rounded-tl-sm"
      )}>
        {textToShow}
        {isStreaming && textToShow.length < content.length && (
          <span className="inline-block w-1.5 h-4 ml-1 bg-[var(--color-purple-soft)] animate-pulse translate-y-0.5" />
        )}
      </div>
    </motion.div>
  );
}