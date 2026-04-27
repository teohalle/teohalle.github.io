import { useState, useEffect, useRef } from 'react';

export default function TerminalText({ lines, speed = 30, prefix = "> " }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const targetTextRef = useRef('');

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    targetTextRef.current = lines[visibleLines];
    let i = 0;
    setCurrentText('');

    const timer = setInterval(() => {
      if (i < targetTextRef.current.length) {
        setCurrentText(targetTextRef.current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setVisibleLines((prev) => prev + 1);
      }
    }, speed);

    return () => clearInterval(timer);
    
  }, [visibleLines, speed]); 

  return (
    <div className="font-mono text-sm text-[var(--color-terminal-green)] opacity-80">
      {lines.slice(0, visibleLines).map((line, idx) => (
        <div key={idx} className="mb-1">{prefix}{line}</div>
      ))}
      {visibleLines < lines.length && (
        <div className="mb-1">
          {prefix}{currentText}
          <span className="animate-pulse inline-block w-2 h-4 bg-[var(--color-terminal-green)] ml-1 translate-y-1" />
        </div>
      )}
    </div>
  );
}