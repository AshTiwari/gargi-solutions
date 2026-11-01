import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../../content';
import Reveal from '../Reveal';
import './Contact.css';

const needs = ['Social media', 'Blogs & copy', 'Strategy', 'LinkedIn', 'Website', 'Resume review'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: '' });
  const [picked, setPicked] = useState([]);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggle = (n) => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  // No backend: compose the enquiry in the visitor's own email app.
  const submit = (e) => {
    e.preventDefault();
    const subject = `New project enquiry${form.brand ? ` from ${form.brand}` : ''}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.brand && `Brand / company: ${form.brand}`,
      picked.length > 0 && `Interested in: ${picked.join(', ')}`,
      '',
      form.message,
    ]
      .filter((line) => line !== false && line !== '')
      .join('\n');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow eyebrow--dark">Start a project</span>
          <h2 className="h2 contact-title">
            Let&apos;s make something people <span className="serif gradient-text nowrap">actually save.</span>
          </h2>
          <p className="contact-lede">
            Tell us a little about your brand. We&apos;ll get back to you with ideas and next steps. The
            first strategy call is free.
          </p>

          <ul className="contact-list">
            <li>
              <a href={`mailto:${contact.email}`}>
                <Mail size={20} /> {contact.email}
              </a>
            </li>
            {contact.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`}>
                  <Phone size={20} /> {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={20} /> {contact.address}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={submit} delay={0.1}>
          <div className="field-row">
            <label className="field">
              <span>Your name</span>
              <input name="name" value={form.name} onChange={update} required autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
            </label>
          </div>
          <label className="field">
            <span>Brand or company</span>
            <input name="brand" value={form.brand} onChange={update} autoComplete="organization" />
          </label>

          <fieldset className="field">
            <legend>What do you need?</legend>
            <div className="chips">
              {needs.map((n) => (
                <button
                  type="button"
                  key={n}
                  className={`chip-btn ${picked.includes(n) ? 'is-on' : ''}`}
                  aria-pressed={picked.includes(n)}
                  onClick={() => toggle(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="field">
            <span>Tell us about your goals</span>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              required
              placeholder="e.g. We're launching a skincare line and want Instagram content that builds a community."
            />
          </label>

          <button type="submit" className="btn btn-gradient contact-submit">
            Send enquiry <ArrowUpRight size={18} />
          </button>
          <p className="form-note" aria-live="polite">
            {sent
              ? `Your email app should have opened. If it didn't, write to us at ${contact.email}.`
              : 'This opens your email app with your details filled in.'}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
