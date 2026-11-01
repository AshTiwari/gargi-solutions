import { process, reasons } from '../../content';
import Reveal from '../Reveal';
import './Process.css';

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow eyebrow--dark">How it works</span>
          <h2 className="h2">
            From first call to <span className="serif gradient-text nowrap">first post.</span>
          </h2>
        </Reveal>

        <ol className="steps">
          {process.map((p, i) => (
            <Reveal as="li" className="step" key={p.step} delay={i * 0.1}>
              <span className="step-num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <section className="section reasons">
      <div className="wrap reasons-grid">
        <Reveal className="reasons-head">
          <span className="eyebrow">Why Kratoos</span>
          <h2 className="h2">
            Small team. <span className="serif gradient-text nowrap">Big ideas.</span>
          </h2>
          <p className="lede">
            You work directly with the people making your content. No account managers in between, no ideas lost in
            translation.
          </p>
        </Reveal>
        <div className="reasons-list">
          {reasons.map((r, i) => (
            <Reveal className="reason" key={r.title} delay={i * 0.06}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
