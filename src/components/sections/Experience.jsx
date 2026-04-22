import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GlowBadge from '../ui/GlowBadge';
import { experience } from '../../data/experience';
import clsx from 'clsx';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wider mb-16 text-center">
        Timeline
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-purple-glow)]/50 to-transparent md:-translate-x-1/2" />

        {experience.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const isWork = item.type === 'work' || item.type === 'research';
          const isActive = item.id === 'bpce';

          return (
            <div key={item.id} className={clsx(
              "relative flex md:justify-between items-center w-full mb-12 pl-[60px] md:pl-0",
              isLeft ? "md:flex-row-reverse" : "md:flex-row"
            )}>
              {/* Timeline Node */}
              <div className="absolute left-[16px] md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-[var(--color-bg-surface)] border-2 border-white" />

              {/* Empty Space for alternate side (Desktop) */}
              <div className="hidden md:block w-5/12" />

              {/* Content Card */}
              <div className="w-full md:w-5/12">
                <GlassCard hover glow={isActive} className={clsx(
                  "p-6", isActive && "border-[var(--color-purple-glow)]/50 bg-[var(--color-purple-glow)]/5"
                )}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className="text-xs font-mono text-[var(--color-text-muted)] whitespace-nowrap ml-4">{item.period}</span>
                  </div>
                  <h4 className="text-sm font-medium text-[var(--color-purple-soft)] mb-4">{item.company}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-[var(--color-text-primary)] flex items-start gap-2 opacity-80">
                        <span className="text-[var(--color-blue-soft)] mt-0.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {item.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                      {item.stack.map(tech => (
                        <GlowBadge key={tech} label={tech} color={isWork ? 'cyan' : 'blue'} />
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}