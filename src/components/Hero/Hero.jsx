import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark, CalendarClock, Check, Heart, Play, Send } from 'lucide-react';
import './Hero.css';

const phrases = ['stops the scroll.', 'gets saved.', 'builds trust.', 'brings clients.'];

function RotatingPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hero-rotator">
      <span key={index} className="hero-rotator-word serif gradient-text">
        {phrases[index]}
      </span>
    </span>
  );
}

function Collage() {
  const ref = useRef(null);

  // Gentle parallax: cards drift toward the pointer.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty('--px', x.toFixed(3));
      el.style.setProperty('--py', y.toFixed(3));
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="collage" ref={ref} aria-hidden="true">
      <div className="card card-reel" style={{ '--depth': 1.4 }}>
        <div className="reel-top">
          <span className="reel-dot" /> Reel · 0:24
        </div>
        <p className="reel-hook">3 hooks that actually work on LinkedIn</p>
        <div className="reel-play">
          <Play size={22} fill="currentColor" />
        </div>
        <div className="reel-actions">
          <Heart size={18} />
          <Send size={18} />
          <Bookmark size={18} />
        </div>
      </div>

      <div className="card card-carousel" style={{ '--depth': 0.8 }}>
        <span className="carousel-count">1 / 7</span>
        <p className="carousel-title">
          Why makhana went <em className="serif">national</em>
        </p>
        <div className="carousel-foot">
          <span className="carousel-dots">
            <i className="on" />
            <i />
            <i />
            <i />
          </span>
          <span>Swipe →</span>
        </div>
      </div>

      <div className="card card-blog" style={{ '--depth': 0.5 }}>
        <span className="chip">Blog</span>
        <p className="blog-title">How to write a homepage that sells</p>
        <span className="skeleton" style={{ width: '92%' }} />
        <span className="skeleton" style={{ width: '78%' }} />
        <span className="skeleton" style={{ width: '85%' }} />
        <span className="blog-meta">6 min read</span>
      </div>

      <div className="card card-chip card-schedule" style={{ '--depth': 1.8 }}>
        <CalendarClock size={18} />
        <span>
          Scheduled <b>Tue · 7:30 PM</b>
        </span>
      </div>

      <div className="card card-chip card-approved" style={{ '--depth': 2.2 }}>
        <span className="tick">
          <Check size={14} strokeWidth={3} />
        </span>
        Approved by client
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-in" style={{ '--d': 0 }}>
            Content studio · Mumbai
          </span>
          <h1 className="display hero-title hero-in" style={{ '--d': 0.08 }}>
            <span className="hero-title-static">Content that</span>{' '}
            <RotatingPhrase />
          </h1>
          <p className="lede hero-in" style={{ '--d': 0.16 }}>
            Kratoos plans, writes and designs content for brands in India and the US. Reels, carousels, blogs,
            LinkedIn and website copy, all built around one clear strategy.
          </p>
          <div className="hero-actions hero-in" style={{ '--d': 0.24 }}>
            <Link to="/#contact" className="btn btn-primary">
              Book a free strategy call <ArrowUpRight size={18} />
            </Link>
            <Link to="/#services" className="btn btn-ghost">
              See what we make
            </Link>
          </div>
          <ul className="hero-proof hero-in" style={{ '--d': 0.32 }}>
            <li>Strategy, writing & design in one team</li>
            <li>Clients in India and the USA</li>
          </ul>
        </div>
        <Collage />
      </div>
    </section>
  );
}
