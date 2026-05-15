import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { staffSections } from '../data';

export default function Staff() {
  return (
    <div id="content">
      <Hero eyebrow="Leadership & staff" title="Qualified, experienced" highlight="and committed." text="The original staff page says the school employs a team that goes beyond the call of duty for education, sport and culture." />
      <section className="dark">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Leadership & staff" title="Qualified, experienced and committed." text="The original staff page says the school employs a team that goes beyond the call of duty for education, sport and culture." /></Reveal>
          <div className="staff-sections">
            {staffSections.map((section) => (
              <div className="staff-section" key={section.heading}>
                <Reveal>
                  <h3 className="staff-heading">{section.heading}</h3>
                </Reveal>
                <div className="staff-grid">
                  {section.people.map((person, index) => (
                    <Reveal delay={index * 0.08} key={person.name}>
                      <article className="staff-card">
                        <div className="staff-photo">
                          <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                        </div>
                        <div><h3>{person.name}</h3><p>{person.role}</p></div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
