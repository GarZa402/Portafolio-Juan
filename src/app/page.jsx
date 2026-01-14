import Reveal from "../components/animations/Reveal";
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Methodology from '../components/sections/Methodology';
import Contact from '../components/sections/Contact';


export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Reveal animation="zoomIn"><Services /></Reveal>
      <Projects />
      <Methodology />
      <Reveal animation="fadeUp"><Contact /></Reveal>
    </main>
  );
}