import { ArrowUpRight } from 'lucide-react';
import { articles } from '../../content';
import Reveal from '../Reveal';
import './Insights.css';

export default function Insights() {
  return (
    <section className="section insights" id="writing">
      <div className="wrap">
        <Reveal className="insights-head">
          <div>
            <span className="eyebrow">Our writing</span>
            <h2 className="h2">
              We write for a living. <span className="serif gradient-text">Read some.</span>
            </h2>
          </div>
          <p className="lede">
            Long-form pieces from our founder on branding, banking and tech, published on LinkedIn. The same research
            and storytelling goes into client work.
          </p>
        </Reveal>

        <div className="article-grid">
          {articles.map((a, i) => (
            <Reveal key={a.href} delay={i * 0.07}>
              <a className="article" href={a.href} target="_blank" rel="noopener noreferrer">
                <div className="article-img">
                  <img src={a.image} alt="" loading="lazy" />
                  <span className="article-topic">{a.topic}</span>
                </div>
                <div className="article-body">
                  <time>{a.date}</time>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="article-link">
                    Read on LinkedIn <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
