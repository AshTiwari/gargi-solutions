import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const links = [
  { to: '/#services', label: 'Services' },
  { to: '/#process', label: 'Process' },
  { to: '/#writing', label: 'Writing' },
  { to: '/#reviews', label: 'Reviews' },
  { to: '/team', label: 'Team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.key]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-logo" aria-label="Kratoos home">
          <img src={logo} alt="Kratoos" width="398" height="198" />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/#contact" className="btn btn-primary nav-cta">
          Start a project <ArrowUpRight size={18} />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <Link key={l.to} to={l.to} style={{ '--i': i }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/#contact" className="btn btn-gradient">
          Start a project <ArrowUpRight size={18} />
        </Link>
      </div>
    </header>
  );
}
