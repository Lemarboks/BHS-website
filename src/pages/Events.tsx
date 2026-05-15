import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import anniversaryBackground from '../assets/images/anniversary-20.svg';
import { eventSections } from '../data';

export default function Events() {
  return (
    <div id="content" className="events-page">
      <Hero eyebrow="Events" title="Celebrate school" highlight="life." text="School moments, ceremonies, sport, culture, fundraisers and community activities are kept together as event highlights." backgroundImage={anniversaryBackground} variant="anniversary" />
      <section className="dark events-dark">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Events" title="Events with energy and movement." text="Event-focused stories, photos and moments from Bloubergrant High School." />
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
