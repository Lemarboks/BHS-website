import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Motto from './pages/Motto';
import Curriculum from './pages/Curriculum';
import Admissions from './pages/Admissions';
import Resources from './pages/Resources';
import Events from './pages/Events';
import News from './pages/News';
import Staff from './pages/Staff';
import Contact from './pages/Contact';

const pageMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.35, ease: 'easeOut' }
} as const;

type ThemeMode = 'normal' | 'anniversary';

export default function App() {
  const location = useLocation();
  const [showAnniversaryNotice, setShowAnniversaryNotice] = useState(true);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'normal';
    }

    return localStorage.getItem('bhs-theme') === 'anniversary' ? 'anniversary' : 'normal';
  });

  useEffect(() => {
    document.body.classList.toggle('theme-anniversary', theme === 'anniversary');
    localStorage.setItem('bhs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'anniversary' ? 'normal' : 'anniversary'));
  };

  const closeAnniversaryNotice = () => {
    setShowAnniversaryNotice(false);
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      {showAnniversaryNotice && (
        <div className="anniversary-modal" role="dialog" aria-modal="true" aria-labelledby="anniversary-modal-title">
          <div className="anniversary-modal-panel">
            <button className="anniversary-modal-close" type="button" aria-label="Close anniversary notice" onClick={closeAnniversaryNotice}>
              <X size={18} />
            </button>
            <div className="anniversary-modal-icon" aria-hidden="true">
              <Sparkles size={24} />
            </div>
            <span className="eyebrow">20 Year Anniversary</span>
            <h2 id="anniversary-modal-title">Celebrating 20 years of Bloubergrant High School.</h2>
            <p>
              Bloubergrant High School marks its 20 year anniversary, honouring two decades of learning, leadership,
              school pride and community growth.
            </p>
            <p>
              To view the anniversary-inspired design, use the theme switch button in the bottom-right corner of the
              website.
            </p>
            <div className="anniversary-modal-actions">
              <button className="anniversary-modal-theme" type="button" aria-pressed={theme === 'anniversary'} onClick={toggleTheme}>
                <Sparkles size={21} />
                <span>{theme === 'anniversary' ? 'Normal theme' : 'Anniversary theme'}</span>
              </button>
              <button className="btn primary" type="button" onClick={closeAnniversaryNotice}>
                Continue to website
              </button>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} {...pageMotion}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/motto" element={<Motto />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
