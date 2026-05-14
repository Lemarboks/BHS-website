import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import latestNews from '../generated/latest-news.json';

export default function News() {
  return (
    <div id="content">
      <Hero eyebrow="What's happening" title="Latest stories," highlight="redesigned." text="News cards make updates easier to scan while keeping the website visually professional and close to the reference layout." />
      <section className="soft">
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Auto-updating news" title="Latest school news." text="These stories update from newer public Bloubergrant school-news posts when the site builds, with the official school feed kept as a fallback." />
          </Reveal>
          <div className="news news-gallery">
            {latestNews.map((item, index) => (
              <Reveal delay={index * 0.08} key={`${item.title}-${item.link}`}>
                <a className="news-card" href={item.link} target="_blank" rel="noreferrer">
                  <div className="news-photo">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-copy">
                    <span className="tag">{item.meta}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
