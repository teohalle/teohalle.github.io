import clsx from 'clsx';

const colorMap = {
  purple: "text-[var(--color-purple-soft)] border-[var(--color-purple-glow)] shadow-[0_0_15px_rgba(124,58,237,0.2)]",
  blue:   "text-[var(--color-blue-soft)] border-[var(--color-blue-glow)] shadow-[0_0_15px_rgba(37,99,235,0.2)]",
  cyan:   "text-[var(--color-cyan-accent)] border-[var(--color-cyan-accent)] shadow-[0_0_15px_rgba(6,182,212,0.2)]",
  green:  "text-[var(--color-terminal-green)] border-[var(--color-terminal-green)] shadow-[0_0_15px_rgba(74,222,128,0.2)]",
};

export default function GlowBadge({ label, color = "purple" }) {
  return (
    <span className={clsx(
      "px-3 py-1 text-xs font-mono font-medium rounded-[var(--radius-pill)] border bg-black/40 backdrop-blur-md",
      colorMap[color]
    )}>
      {label}
    </span>
  );
}