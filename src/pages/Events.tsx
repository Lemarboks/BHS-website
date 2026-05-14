import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { eventSections } from '../data';

export default function Events() {
  return (
    <div id="content">
      <Hero eyebrow="Events" title="Celebrate school" highlight="life." text="Upcoming school moments, ceremonies, sport, culture, fundraisers and community activities are given the same high-energy treatment as the reference design." />
      <section className="dark">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Highlights" title="Events with energy and movement." text="Real school event stories, photos and moments from the existing Bloubergrant High School site." />
          </Reveal>
          <div className="event-sections">
            {eventSections.map((section) => (
              <div className="event-section" key={section.heading}>
                <Reveal>
                  <div className="event-heading">
                    <span className="eyebrow light">Events</span>
                    <h3>{section.heading}</h3>
                    <p>{section.intro}</p>
                  </div>
                </Reveal>
                <div className="event-grid">
                  {section.events.map((event, index) => (
                    <Reveal delay={index * 0.08} key={event.title}>
                      <article className="event-card">
                        <div className="event-photo">
                          <img src={event.image} alt={event.title} />
                        </div>
                        <div className="event-copy">
                          <span className="tag">{event.meta}</span>
                          <h4>{event.title}</h4>
                          <p>{event.text}</p>
                        </div>
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
