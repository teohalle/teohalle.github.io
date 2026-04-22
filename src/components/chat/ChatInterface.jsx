import { useState, useRef, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { getResponse } from '../../data/cvResponses';

const SUGGESTIONS = [
  "What projects has he built?",
  "Tell me about his BPCE experience",
  "What's his AI/ML stack?",
];

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "SYSTEM_ONLINE: Agent initialized.\nLoading context from: Teo_Halle_CV.pdf...\nReady. Ask me anything about Téo's background.",
      isStreaming: true
    }
  ]);
  
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current && (messages.length > 1 || isTyping)) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim() || isTyping) return;

    // Freeze previous streams
    setMessages(prev => prev.map(m => ({ ...m, isStreaming: false })));

    // Add User Message
    const userMsg = { id: Date.now(), role: 'user', content: text.trim(), isStreaming: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate Network/Processing Delay (800ms - 1500ms)
    const delay = Math.floor(Math.random() * 700) + 800;
    
    setTimeout(() => {
      const responseText = getResponse(text);
      const aiMsg = { id: Date.now() + 1, role: 'assistant', content: responseText, isStreaming: true };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, delay);
  };

  return (
    <GlassCard className="w-full max-w-4xl mx-auto h-[700px] flex flex-col p-0 overflow-hidden border-[var(--color-purple-glow)]/20 shadow-[var(--shadow-purple-glow)]">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/10 bg-black/40 flex items-center justify-between z-10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-terminal-green)] animate-pulse shadow-[0_0_8px_var(--color-terminal-green)]" />
          <h3 className="font-mono text-sm font-semibold text-white tracking-widest uppercase">
            {">"} AI Agent — Trained on Téo's CV
          </h3>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollContainerRef} /* <--- ATTACH REF HERE */
        className="flex-1 overflow-y-auto p-6 scrollbar-hide bg-gradient-to-b from-transparent to-black/20"
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} content={msg.content} isStreaming={msg.isStreaming} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input Area & Chips */}
      <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-xl">
        {/* Suggestion Chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {SUGGESTIONS.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              disabled={isTyping}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-purple-glow)]/20 hover:border-[var(--color-purple-glow)]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="relative flex items-center">
          <span className="absolute left-4 text-[var(--color-purple-soft)] font-mono text-lg opacity-70">{">"}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="w-full bg-[#050510]/80 border border-white/10 rounded-[var(--radius-glass)] py-3 pl-10 pr-12 text-sm text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-purple-glow)]/60 focus:ring-1 focus:ring-[var(--color-purple-glow)]/60 transition-all font-mono"
            disabled={isTyping}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-2 p-2 rounded-lg bg-[var(--color-purple-glow)]/20 text-[var(--color-purple-soft)] hover:bg-[var(--color-purple-glow)] hover:text-white disabled:opacity-40 disabled:hover:bg-[var(--color-purple-glow)]/20 disabled:hover:text-[var(--color-purple-soft)] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </GlassCard>
  );
}