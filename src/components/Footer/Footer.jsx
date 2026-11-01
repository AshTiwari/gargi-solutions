import { Link } from 'react-router-dom';
import { contact } from '../../content';
import logo from '../../assets/img/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Kratoos" width="398" height="198" loading="lazy" />
            <p>Content studio for brands that want to be noticed. Mumbai, India.</p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Explore</h3>
            <Link to="/#services">Services</Link>
            <Link to="/#process">Process</Link>
            <Link to="/#writing">Writing</Link>
            <Link to="/#reviews">Reviews</Link>
          </nav>

          <nav className="footer-col" aria-label="Company">
            <h3>Company</h3>
            <Link to="/team">Team</Link>
            <Link to="/principles">Principles</Link>
            <Link to="/#contact">Contact</Link>
          </nav>

          <div className="footer-col">
            <h3>Say hello</h3>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`}>
                {p.label}
              </a>
            ))}
          </div>
        </div>

        <p className="footer-word" aria-hidden="true">
          kratoos
        </p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kratoos Corporation. All rights reserved.</span>
          <span>Create bold. Grow infinite.</span>
        </div>
      </div>
    </footer>
  );
}
