import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { staff } from '../data';

export default function Staff() {
  return (
    <div id="content">
      <Hero eyebrow="Leadership & staff" title="Qualified, experienced" highlight="and committed." text="The original staff page says the school employs a team that goes beyond the call of duty for education, sport and culture." />
      <section className="dark">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Leadership & staff" title="Qualified, experienced and committed." text="The original staff page says the school employs a team that goes beyond the call of duty for education, sport and culture." /></Reveal>
          <div className="staff-grid">
            {staff.map((person, index) => (
              <Reveal delay={index * 0.08} key={person.name}>
                <article className="staff-card">
                  <img src={person.image} alt={person.name} />
                  <div><h3>{person.name}</h3><p>{person.role}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
