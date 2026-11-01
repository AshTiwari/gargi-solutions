import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { extraServices, services } from '../../content';
import Reveal from '../Reveal';
import './Services.css';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What we make</span>
          <h2 className="h2">
            Everything your brand needs to <span className="serif gradient-text">show up</span> online.
          </h2>
          <p className="lede">
            Hire us for one piece or the whole content engine. Either way, it starts with a plan and ends with work you
            are proud to post.
          </p>
        </Reveal>

        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal as="article" className="service-card" key={s.id} delay={(i % 2) * 0.08}>
              <div className="service-top">
                <span className="service-tag">{s.tag}</span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.blurb}</p>
              <ul className="service-list">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="extras">
          <span className="eyebrow">Also from Kratoos</span>
          <div className="extras-grid">
            {extraServices.map((s) => (
              <article className="extra-card" key={s.id}>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
            <Link to="/#contact" className="extra-card extra-cta">
              <span>Not sure what you need?</span>
              <strong>
                Tell us your goal and we&apos;ll suggest a plan <ArrowUpRight size={22} />
              </strong>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
