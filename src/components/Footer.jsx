import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="footer-brand" onClick={() => scrollTo('home')}>
              <img src={logoImg} alt="The Awakened Logo" className="footer-logo-img" />
              <span>THE AWAKENED</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              A sacred space dedicated to preserving Hindu spirituality, ancient wisdom,
              and fostering spiritual growth for all seekers.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>Quick Navigation</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollTo('home')} href="#home">Home Sanctuary</a></li>
              <li><a onClick={() => scrollTo('about')} href="#about">About Our Club</a></li>
              <li><a onClick={() => scrollTo('services')} href="#services">Spiritual Features</a></li>
              <li><a onClick={() => scrollTo('events')} href="#events">Sacred Events</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>Spiritual Resources</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollTo('teachings')} href="#teachings">Vedic Teachings</a></li>
              <li><a onClick={() => scrollTo('gallery')} href="#gallery">Divine Gallery</a></li>
              <li><a onClick={() => scrollTo('blog')} href="#blog">Spiritual Articles</a></li>
              <li><a onClick={() => scrollTo('contact')} href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <p style={{ margin: 0, display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--saffron)' }} />
                +91 91723 34362
              </p>
              <p style={{ margin: 0, display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--saffron)' }} />
                asmit.borade24@vit.edu
              </p>
              <p style={{ margin: 0, display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Clock size={16} style={{ color: 'var(--saffron)' }} />
                Daily: 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} The Awakened. All Rights Reserved. Built with Love.
          </p>
        </div>
      </div>
    </footer>
  );
}
