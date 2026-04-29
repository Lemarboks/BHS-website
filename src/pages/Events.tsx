import { Handshake, Medal, Theater, Utensils } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { images } from '../data';

const events = [
  { icon: Medal, text: 'Sports days and fixtures' },
  { icon: Theater, text: 'Cultural showcases' },
  { icon: Utensils, text: 'Food Fair and fundraising' },
  { icon: Handshake, text: 'Community activities' }
];

export default function Events() {
  return (
    <div id="content">
      <Hero eyebrow="Events" title="Celebrate school" highlight="life." text="Upcoming school moments, ceremonies, sport, culture, fundraisers and community activities are given the same high-energy treatment as the reference design." />
      <section className="dark">
        <div className="container split">
          <Reveal>
            <SectionHeader eyebrow="Highlights" title="Events with energy and movement." />
            <div className="pill-grid">
              {events.map(({ icon: Icon, text }, index) => (
                <Reveal key={text} delay={index * 0.06} className="pill">
                  <Icon size={22} /> {text}
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal className="feature floaty"><img src={images.foodFairOne} alt="School event" /></Reveal>
        </div>
      </section>
    </div>
  );
}
