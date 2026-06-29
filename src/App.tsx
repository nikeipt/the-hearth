import { motion, useScroll, useSpring } from "framer-motion";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Hearth home">
          The Hearth
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}
