import { Mail, MapPin, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import { school } from '../data';

export default function Contact() {
  return (
    <div id="content">
      <Hero eyebrow="Contact" title="Visit, call, or" highlight="send an enquiry." text="A focused contact page gives visitors the same school details and quick enquiry treatment as the reference design." />
      <section className="dark">
        <div className="container contact-grid">
          <Reveal className="contact-panel">
            <span className="eyebrow light">Contact</span>
            <h2>Visit, call, or send an enquiry.</h2>
            <div className="contact-item"><MapPin /> <span>{school.address}</span></div>
            <div className="contact-item"><Phone /> <span>{school.phone}</span></div>
            <div className="contact-item"><Mail /> <span>{school.email}</span></div>
          </Reveal>
          <Reveal className="form">
            <h3>Quick enquiry</h3>
            <input aria-label="Parent or learner name" placeholder="Parent / learner name" required />
            <input aria-label="Email address" type="email" placeholder="Email address" required />
            <textarea aria-label="Message" placeholder="How can the school help?" />
            <button className="btn blue" type="button">Send enquiry</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
