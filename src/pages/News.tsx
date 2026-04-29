import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { newsItems } from '../data';

export default function News() {
  return (
    <div id="content">
      <Hero eyebrow="What's happening" title="Latest stories," highlight="redesigned." text="News cards make updates easier to scan while keeping the website visually professional and close to the reference layout." />
      <section className="soft">
        <div className="container">
          <Reveal><SectionHeader eyebrow="What's happening" title="Latest stories, redesigned." /></Reveal>
          <div className="news">
            {newsItems.map((item, index) => (
              <Reveal delay={index * 0.1} key={item.title}>
                <article className="card full">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
