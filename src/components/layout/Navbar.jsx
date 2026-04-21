export default function Navbar() {
  const links = ["About", "Projects", "Experience", "Chat", "Contact"];

  return (
    <nav className="fixed top-0 z-40 w-full bg-black/20 backdrop-blur-md border-b border-white/5 py-4 transition-all">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Initials */}
        <div className="font-display font-bold text-2xl tracking-wider text-white">
          TH<span className="text-[var(--color-purple-glow)]">.</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-text-muted)]">
          {links.map((link) => (
            <li key={link} className="hover:text-white cursor-pointer transition-colors duration-300">
              {link}
            </li>
          ))}
        </ul>
        
        {/* Mobile menu icon placeholder */}
        <div className="md:hidden text-[var(--color-text-muted)]">
          ☰
        </div>
      </div>
    </nav>
  );
}