import { useEffect } from 'react';
import { LangProvider } from './contexts/LangContext';
import { Nav } from './components/nav/Nav';
import { Hero } from './components/hero/Hero';
import { Metrics } from './components/metrics/Metrics';
import { About } from './components/about/About';
import { Process } from './components/process/Process';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Stack } from './components/stack/Stack';
import { Contact } from './components/contact/Contact';

function App() {
  useEffect(() => {
    const el = document.getElementById('loader');
    if (el) {
      const t = setTimeout(() => {
        el.classList.add('gone');
        const t2 = setTimeout(() => el.remove(), 900);
        return () => clearTimeout(t2);
      }, 1100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Process />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </LangProvider>
  );
}

export default App;
