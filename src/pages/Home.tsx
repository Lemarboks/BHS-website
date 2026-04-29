import { Link } from 'react-router-dom';
import { Globe2, GraduationCap, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { pathways, school, values } from '../data';

const valueIcons = {
  shield: ShieldCheck,
  globe: Globe2,
  graduation: GraduationCap
};

export default function Home() {
  return (
    <div id="content">
      <Hero
        eyebrow={`School motto: ${school.motto}`}
        title="High School"
        highlight="Bloubergrant."
        text="A modern, professional and animated website concept for a diverse Cape Town high school community - built around real school information, admissions, curriculum, staff, news, contact details and actual images from the school website."
        primaryLabel="Admissions & resources"
        primaryTo="/admissions"
        secondaryLabel="Explore the school"
        secondaryTo="/about"
        showCard
      />

      <section className="light">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">About BHS</span>
            <h2>A diverse school of excellence in Table View.</h2>
          </Reveal>
          <Reveal>
            <p>Bloubergrant High School was established in January 2006 and has grown ever since, with its first matriculants completing Grade 12 in 2009.</p>
            <p>The school describes itself as a diverse learning community with learners from different walks of life, races, creeds and cultures. Because BHS is a relatively small school, learners benefit from small classes and personal attention from educators.</p>
          </Reveal>
        </div>
        <div className="container cards value-cards">
          {values.map((item, index) => {
            const Icon = valueIcons[item.icon as keyof typeof valueIcons];
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="card full">
                  <div className="icon"><Icon size={34} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Admissions, resources, events" title="Three clear pathways for families." text="Fast navigation for the pages parents and learners look for most." /></Reveal>
          <div className="cards">
            {pathways.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <Link className="card full" to={card.path}>
                  <div className="icon"><img src={card.image} alt="" /></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="btn blue">{card.cta}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
