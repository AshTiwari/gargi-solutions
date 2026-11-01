import { marqueeItems } from '../../content';
import './Marquee.css';

export default function Marquee() {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item}>
          {item}
          <span className="marquee-star">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="region" aria-label="What we create">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
