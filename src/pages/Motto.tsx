import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { school } from '../data';

export default function Motto() {
  return (
    <div id="content">
      <Hero eyebrow="School motto" title="To lead with" highlight="Integrity." text="This redesign gives the motto its own branded moment: leadership, accountability, respect and school pride are presented as the values that guide the learner journey at Bloubergrant High School." />
      <section className="soft">
        <div className="container">
          <Reveal className="motto-panel">
            <span className="eyebrow light">School motto</span>
            <h2>{school.motto}.</h2>
            <p>This page expands the reference site's motto section into a dedicated webpage while keeping the same branded blue, red and navy presentation.</p>
            <Link className="btn primary" to="/contact">Contact the school</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
