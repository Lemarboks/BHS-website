import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import Gallery from './pages/Gallery';
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

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
