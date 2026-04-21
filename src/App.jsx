import Root from './components/layout/Root';
import Hero from './components/sections/Hero';

function App() {
  const pendingSections = ["About", "Projects", "Experience", "ChatCV", "Contact"];

  return (
    <Root>
      <Hero />
      
      {pendingSections.map((section) => (
        <section 
          key={section} 
          id={section.toLowerCase()} 
          className="min-h-screen w-full flex items-center justify-center border-b border-white/5"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white/20 tracking-wider">
            {section}
          </h2>
        </section>
      ))}
    </Root>
  );
}

export default App;