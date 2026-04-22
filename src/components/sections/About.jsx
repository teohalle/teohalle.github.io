import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GlowBadge from '../ui/GlowBadge';
import { skills } from '../../data/skills';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Bio Column */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-display font-bold text-white tracking-wider mb-6">
            System<br/>Architecture.
          </h2>
          <GlassCard className="border-[var(--color-blue-glow)]/20 shadow-[var(--shadow-blue-glow)]">
            <p className="text-[var(--color-text-primary)] leading-relaxed mb-4">
              Future AI & Software Engineer (EPITA 2026) with strong expertise in Software Development, GenAI, and DevOps.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
              I design robust, scalable architectures to deliver production-grade solutions for complex business challenges, bridging the gap between experimental AI and enterprise software.
            </p>
            <div className="mt-6 flex gap-2 border-t border-white/10 pt-4">
              <GlowBadge label="Paris, FR" color="cyan" />
              <GlowBadge label="Available Sept. 2026" color="green" />
            </div>
          </GlassCard>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <GlassCard key={category} hover className="p-5 bg-white/[0.02]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] mb-4 border-b border-white/5 pb-2">
                {category.replace('_', ' / ')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => {
                  // Check if the skill is an object (like in languages_spoken) or a standard string
                  const isObject = typeof skill === 'object' && skill !== null;
                  
                  // Format the string for the label: e.g., "French (Native)" or just "Python"
                  const labelText = isObject ? `${skill.lang} (${skill.level})` : skill;
                  
                  // Use the formatted text for both the key and the label
                  return <GlowBadge key={labelText} label={labelText} color="purple" />;
                })}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}