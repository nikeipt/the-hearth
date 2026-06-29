import { Reveal } from "../components/Reveal";
import { featuredWork } from "../data/work";

export function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Systems with visible outcomes.</h2>
        </div>
      </Reveal>
      <div className="work-grid">
        {featuredWork.map((item) => (
          <Reveal key={item.title}>
            <article className="work-card">
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <span>{item.summary}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
