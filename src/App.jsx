import Root from './components/layout/Root';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import ChatCV from './components/sections/ChatCV';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Root>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <ChatCV />
      <Contact />
    </Root>
  );
}

export default App;