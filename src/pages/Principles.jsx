import { principles } from '../content';
import Reveal from '../components/Reveal';
import { CtaBand } from './Team';
import './pages.css';

export default function Principles() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow hero-in" style={{ '--d': 0 }}>
            Our principles
          </span>
          <h1 className="display page-title hero-in" style={{ '--d': 0.08 }}>
            Three ideas we <span className="serif gradient-text nowrap">work by.</span>
          </h1>
          <p className="lede hero-in" style={{ '--d': 0.16 }}>
            They guide every decision we make, from the ideas we pitch to the way we treat the people we work with.
          </p>
        </div>
      </section>

      <section className="wrap principles-list">
        {principles.map((p, i) => (
          <Reveal as="article" className="principle" key={p.title}>
            <span className="principle-num serif">0{i + 1}</span>
            <h2>{p.title}</h2>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
