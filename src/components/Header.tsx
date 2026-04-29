import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { images, navItems, school } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <a className="skip" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <img src={images.logo} alt="Bloubergrant High School logo" />
            <span><small>High School</small>{school.name}</span>
          </Link>
          <button className="menu" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={18} /> Menu
          </button>
          <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
            <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={18} /> Close
            </button>
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink className="btn primary nav-cta" to="/admissions" onClick={() => setOpen(false)}>
              Admissions
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
