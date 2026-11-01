import { Link } from 'react-router-dom';
import './pages.css';

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1 className="display page-title">
          This page didn&apos;t make <span className="serif gradient-text">the final cut.</span>
        </h1>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
