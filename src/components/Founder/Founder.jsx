import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { founder } from '../../content';
import Reveal from '../Reveal';
import './Founder.css';

export default function Founder() {
  return (
    <section className="section founder" id="about">
      <div className="wrap founder-grid">
        <Reveal className="founder-photo">
          <img src={founder.image} alt={founder.name} loading="lazy" width="900" height="1196" />
          <span className="founder-badge">
            <span className="serif">Founder</span>
          </span>
        </Reveal>

        <Reveal className="founder-copy" delay={0.1}>
          <span className="eyebrow">Who you&apos;ll work with</span>
          <h2 className="h2">
            Hi, I&apos;m <span className="serif gradient-text">Priyanka.</span>
          </h2>
          <p className="founder-text">{founder.short}</p>
          <p className="founder-sign">
            <strong>{founder.name}</strong>
            <span>{founder.title}</span>
          </p>
          <div className="founder-actions">
            <Link to="/team" className="btn btn-primary">
              Meet the team <ArrowUpRight size={18} />
            </Link>
            <Link to="/principles" className="btn btn-ghost">
              Our principles
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
