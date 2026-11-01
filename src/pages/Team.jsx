import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { founder } from '../content';
import Reveal from '../components/Reveal';
import './pages.css';

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow hero-in" style={{ '--d': 0 }}>
            Our team
          </span>
          <h1 className="display page-title hero-in" style={{ '--d': 0.08 }}>
            The mind behind <span className="serif gradient-text nowrap">the posts.</span>
          </h1>
        </div>
      </section>

      <section className="wrap team-founder">
        <Reveal className="team-founder-photo">
          <img src={founder.image} alt={founder.name} width="900" height="1196" />
        </Reveal>
        <Reveal className="team-founder-copy" delay={0.1}>
          <span className="eyebrow">Founder</span>
          <h2 className="h2">{founder.name}</h2>
          <p className="team-role">{founder.title}</p>
          {founder.long.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}

export function CtaBand() {
  return (
    <section className="wrap">
      <Reveal className="cta-band">
        <h2 className="h2">
          Ready to be <span className="serif">noticed?</span>
        </h2>
        <Link to="/#contact" className="btn btn-primary cta-band-btn">
          Start a project <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </section>
  );
}
