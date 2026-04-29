import { BookOpen, BriefcaseBusiness, Calculator, Landmark, Monitor, Microscope } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { subjects } from '../data';

const icons = [BookOpen, Calculator, Microscope, BriefcaseBusiness, Monitor, Landmark];

export default function Curriculum() {
  return (
    <div id="content">
      <Hero eyebrow="Curriculum" title="Subject choices made" highlight="easier to understand." text="The curriculum page is redesigned into helpful subject-choice cards for Grades 10, 11 and 12." />
      <section className="dark">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Curriculum</span>
            <h2>Subject choices made easier to understand.</h2>
            <p>The curriculum page can be redesigned into helpful subject-choice cards for Grades 10, 11 and 12.</p>
          </Reveal>
          <div className="pill-grid">
            {subjects.map((subject, index) => {
              const Icon = icons[index];
              return (
                <Reveal delay={index * 0.06} key={subject} className="pill">
                  <Icon size={22} /> {subject}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
