import { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("teohalle14@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" className="min-h-[70vh]">
      <GlassCard className="max-w-2xl mx-auto text-center p-12 border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-purple-glow)]/20 blur-[60px] rounded-full pointer-events-none" />
        
        <h2 className="text-5xl font-display font-bold text-white mb-4">
          Let's Build Something.
        </h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
          Currently open to new opportunities starting September 2026. Whether you have a question or just want to say hi, my inbox is open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleCopy}
            className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium bg-[var(--color-purple-glow)]/10 text-white border border-[var(--color-purple-glow)]/50 hover:bg-[var(--color-purple-glow)]/30 hover:shadow-[var(--shadow-purple-glow)] transition-all duration-300 relative"
          >
            {copied ? "Email Copied!" : "teohalle14@gmail.com"}
          </button>
          
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/teo-halle" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-[var(--color-blue-soft)] transition-colors text-[var(--color-text-primary)]">
              LinkedIn ↗
            </a>
            <a href="https://github.com/teohalle" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors text-[var(--color-text-primary)]">
              GitHub ↗
            </a>
          </div>
        </div>
      </GlassCard>
      
      <div className="mt-24 text-center text-xs font-mono text-[var(--color-text-dim)]">
        Designed & Built by Téo Hallé <br/> EPITA 2026
      </div>
    </SectionWrapper>
  );
}