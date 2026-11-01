import { useState } from 'react';
import { testimonials } from '../../content';
import Reveal from '../Reveal';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Client words</span>
          <h2 className="h2">
            Don&apos;t take <span className="serif gradient-text">our</span> word for it.
          </h2>
        </Reveal>

        <Reveal className="review-stage">
          <div className="review-tabs" role="tablist" aria-label="Client testimonials">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                id={`review-tab-${i}`}
                aria-selected={i === active}
                aria-controls="review-panel"
                className={`review-tab ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <img src={item.image} alt="" width="48" height="48" loading="lazy" />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.place}</small>
                </span>
              </button>
            ))}
          </div>

          <figure className="review-card" id="review-panel" role="tabpanel" aria-labelledby={`review-tab-${active}`}>
            <span className="review-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote key={active}>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{[t.role, t.place].filter(Boolean).join(' · ')}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
