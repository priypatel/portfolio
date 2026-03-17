import Nav from './components/Nav';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function Divider() {
  return (
    <div
      className="relative z-[1] max-w-[820px] mx-auto h-px"
      style={{ background: 'var(--border)' }}
    />
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <AboutIntro />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Footer />
    </>
  );
}
