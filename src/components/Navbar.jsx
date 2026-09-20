import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic active section observer
      const sections = ['home', 'about', 'services', 'events', 'teachings', 'gallery', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          <img src={logoImg} alt="The Awakened Logo" className="navbar-logo-img" />
          <span>THE AWAKENED</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <span
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}
              onClick={() => scrollToSection('events')}
            >
              Events
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'teachings' ? 'active' : ''}`}
              onClick={() => scrollToSection('teachings')}
            >
              Teachings
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={() => scrollToSection('gallery')}
            >
              Gallery
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
              onClick={() => scrollToSection('blog')}
            >
              Blog
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </span>
          </li>
        </ul>

        {/* Action Buttons / Mobile Menu Toggle */}
        <div className="nav-actions">
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--saffron)',
              cursor: 'pointer',
              display: 'none',
              padding: '4px'
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
