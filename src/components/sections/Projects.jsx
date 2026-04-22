import SectionWrapper from '../ui/SectionWrapper';
import DataBlockGrid from '../projects/DataBlockGrid';
import DataBlock from '../projects/DataBlock';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wider flex items-center gap-4">
          Data Blocks
          <span className="text-[var(--color-purple-glow)] animate-pulse">_</span>
        </h2>
        <p className="text-[var(--color-text-muted)] mt-4 font-mono text-sm border-l-2 border-[var(--color-purple-glow)]/50 pl-3">
          {">"} querying indexed_projects... <br/>
          {">"} {projects.length} results found.
        </p>
      </div>
      
      <DataBlockGrid>
        {projects.map(project => (
          <DataBlock key={project.id} project={project} />
        ))}
      </DataBlockGrid>
    </SectionWrapper>
  );
}