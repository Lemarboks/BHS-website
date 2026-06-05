import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { pathways, school } from '../data';
import badgeLogo from '../assets/images/bhs-badge.png';
import admissionCheckIcon from '../assets/images/admission-check-icon.svg';
import resourcesBookIcon from '../assets/images/resources-book-icon.svg';
import eventsCalendarIcon from '../assets/images/events-calendar-icon.svg';

const customPathwayIcons = {
  Admission: admissionCheckIcon,
  Resources: resourcesBookIcon,
  Events: eventsCalendarIcon
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
        cardMedia={
          <div className="purveyors-graphic" aria-label="Purveyors of Quality Education">
            <div className="purveyors-text">
              <span>'PURVEYORS</span>
              <span>OF</span>
              <span>QUALITY</span>
              <span>EDUCATION'</span>
            </div>
            <img src={badgeLogo} alt="" fetchPriority="high" decoding="async" />
            <span className="purveyors-line" aria-hidden="true"></span>
          </div>
        }
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
      </section>

      <section className="soft">
        <div className="container">
          <Reveal><SectionHeader eyebrow="Admissions, resources, events" title="Three clear pathways for families." text="Fast navigation for the pages parents and learners look for most." /></Reveal>
          <div className="cards">
            {pathways.map((card, index) => {
              const customIcon = customPathwayIcons[card.title as keyof typeof customPathwayIcons];
              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <div className="card full pathway-card">
                    <div className="icon pathway-icon">
                      <img className="pathway-custom-icon" src={customIcon} alt="" loading="lazy" decoding="async" />
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <Link className="btn blue" to={card.path}>{card.cta}</Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
