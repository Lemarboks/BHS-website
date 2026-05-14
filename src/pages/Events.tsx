import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import latestNews from '../generated/latest-news.json';

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
            <div className="event-section">
              <Reveal>
                <div className="event-heading">
                  <span className="eyebrow light">Auto-updating</span>
                  <h3>Latest News</h3>
                  <p>These cards are generated from the latest-news feed on the official Bloubergrant High School website whenever the site builds.</p>
                </div>
              </Reveal>
              <div className="event-grid">
                {latestNews.map((event, index) => (
                  <Reveal delay={index * 0.08} key={`${event.title}-${event.link}`}>
                    <a className="event-card" href={event.link} target="_blank" rel="noreferrer">
                      <div className="event-photo">
                        <img src={event.image} alt={event.title} />
                      </div>
                      <div className="event-copy">
                        <span className="tag">{event.meta}</span>
                        <h4>{event.title}</h4>
                        <p>{event.text}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
