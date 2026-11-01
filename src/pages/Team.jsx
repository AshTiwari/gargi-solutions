import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { founder, team } from '../content';
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
            The people behind <span className="serif gradient-text">the posts.</span>
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

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="h2">The crew</h2>
          </Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal as="article" className="team-card" key={m.name} delay={i * 0.08}>
                <div className="team-photo">
                  <img src={m.image} alt={m.name} loading="lazy" width="600" height="800" />
                </div>
                <h3>{m.name}</h3>
                <p className="team-role">{m.title}</p>
                <p>{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
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
