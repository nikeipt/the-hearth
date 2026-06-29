import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 id="about-title">Operator, PM, systems thinker, builder.</h2>
      </Reveal>
      <Reveal>
        <p className="body-large">
          I work across public-sector platforms, DTC commerce, options trading,
          and AI-enabled operating systems. The through-line is structure:
          make the work observable, make decisions explicit, and keep the system
          small enough to steer.
        </p>
      </Reveal>
    </section>
  );
}
