import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import Reveal from './Reveal';
import { images, school } from '../data';

type HeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  text: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  showCard?: boolean;
};

export default function Hero({ eyebrow, title, highlight, text, primaryLabel, primaryTo, secondaryLabel, secondaryTo, showCard = false }: HeroProps) {
  return (
    <section className={`hero ${showCard ? 'hero-home' : 'hero-page'}`} style={{ '--hero-img': `url(${images.hero})` } as CSSProperties}>
      <span className="orb one"></span>
      <span className="orb two"></span>
      <div className={`container ${showCard ? 'hero-grid' : 'hero-content'}`}>
        <Reveal className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title} {highlight && <span className="gradient">{highlight}</span>}</h1>
          <p className="lead">{text}</p>
          {(primaryLabel || secondaryLabel) && (
            <div className="hero-actions">
              {primaryLabel && primaryTo && <Link className="btn primary" to={primaryTo}>{primaryLabel}</Link>}
              {secondaryLabel && secondaryTo && <Link className="btn ghost" to={secondaryTo}>{secondaryLabel}</Link>}
            </div>
          )}
        </Reveal>
        {showCard && (
          <Reveal className="hero-card">
            <div className="image">
              <img src={images.hero} alt="Grade 8 Orientation at Bloubergrant High School" />
            </div>
            <div className="stats">
              <div className="stat"><b>2006</b><span>Opened its doors</span></div>
              <div className="stat"><b>{school.firstMatric}</b><span>First matriculants</span></div>
              <div className="stat"><b>Gr 8-12</b><span>High school pathway</span></div>
              <div className="stat"><b>Table View</b><span>Cape Town</span></div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
