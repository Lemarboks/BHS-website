import { Pin } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { resources } from '../data';

export default function Resources() {
  return (
    <div id="content">
      <Hero eyebrow="Resources" title="Helpful information for" highlight="families." text="School uniform details, policies, newsletters, learner support and parent communication links are grouped into clear cards." />
      <section className="soft">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Parent and learner resources" title="Everything important, neatly organised." /></Reveal>
          <div className="cards">
            {resources.map((resource, index) => (
              <Reveal delay={index * 0.06} key={resource}>
                <div className="card full">
                  <div className="icon"><Pin size={30} /></div>
                  <h3>{resource}</h3>
                  <p>A dedicated space for this important school resource or downloadable document.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
