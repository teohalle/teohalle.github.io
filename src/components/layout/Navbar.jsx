import useActiveSection from '../../hooks/useActiveSection';
import clsx from 'clsx';

export default function Navbar() {
  const links = ["hero", "about", "projects", "experience", "chat", "contact"];
  const activeSection = useActiveSection(links);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 transition-all shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-2xl tracking-wider text-white cursor-pointer" onClick={() => scrollTo('hero')}>
          TH<span className="text-[var(--color-purple-glow)]">.</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => {
            if (link === 'hero') return null; // Don't show hero in the text links
            const isActive = activeSection === link;
            return (
              <li 
                key={link} 
                onClick={() => scrollTo(link)}
                className={clsx(
                  "cursor-pointer capitalize transition-all duration-300 relative",
                  isActive ? "text-white" : "text-[var(--color-text-muted)] hover:text-white"
                )}
              >
                {link}
                {isActive && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-purple-glow)] shadow-[var(--shadow-purple-glow)]" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}