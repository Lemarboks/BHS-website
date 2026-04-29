import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { gallery } from '../data';

export default function Gallery() {
  return (
    <div id="content">
      <Hero eyebrow="Actual school pictures" title="Photo-led pages for" highlight="school life." text="These images are referenced from the current Bloubergrant High School website, so the page shows real school media when online." />
      <section className="light">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Actual school pictures" title="Photo-led pages for school life." text="These images are referenced from the current Bloubergrant High School website, so the downloadable page shows real school media when online." /></Reveal>
          <div className="gallery">
            {gallery.map((photo, index) => (
              <Reveal key={photo.title} delay={index * 0.08} className="photo">
                <img src={photo.image} alt={photo.title} />
                <span>{photo.title}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
