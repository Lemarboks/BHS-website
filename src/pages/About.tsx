import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { timeline } from '../data';

export default function About() {
  return (
    <div id="content">
      <Hero eyebrow="History, vision & mission" title="Rooted in opportunity," highlight="built for growth." text="Presented as a clean story page instead of a long text page, with key school facts surfaced quickly for visitors." />
      <section className="light">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">About BHS</span>
            <h2>A diverse school of excellence in Table View.</h2>
            <p>Bloubergrant High School was established in January 2006 and has grown ever since, with its first matriculants completing Grade 12 in 2009.</p>
            <p>The school describes itself as a diverse learning community with learners from different walks of life, races, creeds and cultures.</p>
          </Reveal>
          <div className="timeline">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08} className="timeline-item">
                <strong>{item.year}</strong><br />{item.text}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
