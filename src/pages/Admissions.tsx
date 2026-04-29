import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { pathways } from '../data';

const steps = ['Application guidance', 'Admissions policy', 'Fee information', 'Enrolment information'];

export default function Admissions() {
  return (
    <div id="content">
      <Hero eyebrow="Admissions" title="Three clear pathways" highlight="for families." text="Fast navigation for the pages parents and learners look for most, with the admission journey presented in clear cards." />
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
          <div className="cards mini-cards">
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <div className="card">
                  <div className="icon">{index + 1}</div>
                  <h3>{step}</h3>
                  <p>Helpful guidance for families preparing for admission to Bloubergrant High School.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
