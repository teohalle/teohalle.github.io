import SectionWrapper from '../ui/SectionWrapper';
import ChatInterface from '../chat/ChatInterface';

export default function ChatCV() {
  return (
    <SectionWrapper id="chat">
      <div className="mb-10 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wider">
          Chat with my CV
          <span className="text-[var(--color-blue-glow)] animate-pulse">_</span>
        </h2>
        <p className="text-[var(--color-text-muted)] mt-4 font-body max-w-xl text-sm md:text-base">
          Interact with a simulated agent trained on my professional background. 
          Ask it questions to quickly retrieve information about my skills, education, and experience.
        </p>
      </div>

      <div className="w-full relative z-20">
        {/* Ambient glow behind the chat container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl h-[90%] bg-[var(--color-purple-glow)]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <ChatInterface />
      </div>
    </SectionWrapper>
  );
}