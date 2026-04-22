import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import GlowBadge from '../ui/GlowBadge';
import TerminalText from '../ui/TerminalText';

export default function DataBlock({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // State for the animated progress bar
  const [currentPct, setCurrentPct] = useState(
    project.status === 'INDEXED' ? project.embeddingPct : 0
  );

  // Loop the progress bar if the status is INDEXING
  useEffect(() => {
    if (project.status === 'INDEXING') {
      const timer = setInterval(() => {
        setCurrentPct((prev) => {
          if (prev >= project.embeddingPct) return 0;
          return prev + 1; // Increment speed
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [project.status, project.embeddingPct]);

  // Calculate ASCII progress bar blocks
  const totalBlocks = 14;
  const filledBlocks = Math.floor((currentPct / 100) * totalBlocks);
  const barStr = '█'.repeat(Math.max(0, filledBlocks)) + '░'.repeat(Math.max(0, totalBlocks - filledBlocks));

  const terminalLines = [
    `project_name: "${project.title}"`,
    `language:     ${project.lang}`,
    `vectors:      ${project.vectorCount} embeddings`,
    `embedding:    [${barStr}] ${currentPct}%`
  ];

  const isIndexed = project.status === 'INDEXED';

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 0 40px rgba(124,58,237,0.35)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full rounded-[var(--radius-glass)]"
      >
        <GlassCard className="h-full flex flex-col group transition-all duration-300 border-white/5 hover:border-[var(--color-purple-glow)]/50">
          
          {/* Header Bar */}
          <div className="flex justify-between items-center text-xs font-mono border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className={isIndexed ? 'text-[var(--color-terminal-green)]' : 'text-[var(--color-terminal-amber)] animate-pulse'}>
                [●]
              </span>
              <span className="text-white/70 tracking-widest">{project.status}...</span>
            </div>
            <span className="text-white/40">chunk_id: {project.chunkId}</span>
          </div>

          {/* Terminal Lines */}
          <div className="mb-6 h-[100px] overflow-hidden">
            <TerminalText 
              key={isHovered ? 'hover' : 'static'} // Forces re-typing on hover
              lines={terminalLines} 
              speed={15} 
            />
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>

          {/* Footer: Tags & CTA */}
          <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <GlowBadge 
                  key={tag} 
                  label={tag} 
                  color={isIndexed ? 'purple' : 'blue'} 
                />
              ))}
            </div>
            
            {project.github ? (
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-right text-white/50 hover:text-[var(--color-purple-soft)] transition-colors inline-block ml-auto"
              >
                [→ GitHub ↗]
              </a>
            ) : (
              <span className="text-xs font-mono text-right text-white/20 inline-block ml-auto cursor-not-allowed">
                [🔒 Internal Repo]
              </span>
            )}
          </div>

        </GlassCard>
      </motion.div>
    </div>
  );
}