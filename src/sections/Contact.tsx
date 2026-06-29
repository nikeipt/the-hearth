import { Reveal } from "../components/Reveal";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">For sharp problems and useful systems.</h2>
        <a className="contact-link" href="mailto:nick@example.com">
          nick@example.com
        </a>
      </Reveal>
    </section>
  );
}
