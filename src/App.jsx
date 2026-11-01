import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Principles from './pages/Principles';
import NotFound from './pages/NotFound';

const titles = {
  '/': 'Kratoos | Content studio for brands that want to be noticed',
  '/team': 'Team | Kratoos',
  '/principles': 'Our principles | Kratoos',
  '/ourprinciples': 'Our principles | Kratoos',
};

// Scrolls to #hash targets (including across routes) and resets scroll on page change.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    document.title = titles[pathname.toLowerCase()] ?? 'Page not found | Kratoos';
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/principles" element={<Principles />} />
          {/* Old URL kept so existing links keep working */}
          <Route path="/ourprinciples" element={<Principles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
