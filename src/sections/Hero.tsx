import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 120]);
  const copyY = useTransform(scrollY, [0, 700], [0, -72]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-art" style={{ y: imageY }} />
      <div className="hero-shade" />
      <motion.div className="hero-content" style={{ y: copyY }}>
        <p className="eyebrow">Portfolio / systems / craft</p>
        <h1 id="hero-title">The Hearth</h1>
        <p className="hero-copy">
          Public workbench for product systems, government platforms, commerce,
          AI agents, and the operating patterns behind durable execution.
        </p>
        <a className="hero-link" href="#work">
          View work
        </a>
      </motion.div>
    </section>
  );
}
