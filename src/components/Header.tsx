import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Sparkles, X } from 'lucide-react';
import { navItems, school } from '../data';
import BadgeLogo from './BadgeLogo';

type HeaderProps = {
  theme: 'normal' | 'anniversary';
  onToggleTheme: () => void;
};

export default function Header({ theme, onToggleTheme }: HeaderProps) {
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <a className="skip" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <BadgeLogo />
            <span className="sr-only">Bloubergrant High School logo</span>
            <span><small>High School</small>{school.name}</span>
          </Link>
          <button className="menu" aria-label="Open menu" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(true)}>
            <Menu size={18} /> Menu
          </button>
          <nav id="main-navigation" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
            <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X size={18} /> Close
            </button>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `${isActive ? 'active ' : ''}${item.path === '/contact' ? 'btn primary nav-cta' : ''}`.trim()}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <button
        className="theme-toggle"
        type="button"
        aria-pressed={theme === 'anniversary'}
        aria-label={`Switch to ${theme === 'anniversary' ? 'normal' : 'anniversary'} theme`}
        onClick={onToggleTheme}
      >
        <Sparkles size={22} />
      </button>
    </>
  );
}
