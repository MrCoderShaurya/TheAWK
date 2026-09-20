import React from 'react';
import { Flame, HeartHandshake, Compass } from 'lucide-react';

/**
 * @param {{ onBookPuja?: () => void }} props
 */
export default function Hero({ onBookPuja }) {
  return (
    <section className="hero" id="home">
      {/* Background Image with Overlay */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1561361058-54f9f3b97a38?w=1920&q=80"
          alt="Sacred Hindu Temple Interior"
        />
      </div>
      <div className="hero-overlay"></div>

      {/* Rotating Sacred SVG Mandala */}
      <div className="mandala-container">
        <div className="mandala">
          <svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="95" strokeWidth="0.5" opacity="0.3" />
            <circle cx="100" cy="100" r="80" strokeWidth="0.5" opacity="0.4" />
            <circle cx="100" cy="100" r="65" strokeWidth="0.5" opacity="0.5" />
            <circle cx="100" cy="100" r="50" strokeWidth="0.5" opacity="0.6" />
            <circle cx="100" cy="100" r="35" strokeWidth="0.5" opacity="0.7" />
            <circle cx="100" cy="100" r="20" strokeWidth="0.5" opacity="0.8" />
            <g strokeWidth="0.5" opacity="0.5">
              <ellipse cx="100" cy="30" rx="15" ry="30" />
              <ellipse cx="100" cy="170" rx="15" ry="30" />
              <ellipse cx="30" cy="100" rx="30" ry="15" />
              <ellipse cx="170" cy="100" rx="30" ry="15" />
              <ellipse cx="50" cy="50" rx="15" ry="15" transform="rotate(45 50 50)" />
              <ellipse cx="150" cy="50" rx="15" ry="15" transform="rotate(-45 150 50)" />
              <ellipse cx="50" cy="150" rx="15" ry="15" transform="rotate(-45 50 150)" />
              <ellipse cx="150" cy="150" rx="15" ry="15" transform="rotate(45 150 150)" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            Awaken Your Inner Being
          </p>

          <h1 className="hero-title">
            Discover the Path of Self Discovery
          </h1>

          <p className="hero-description">
            Embark on a sacred journey of self-discovery, spiritual growth, and divine connection.
            Experience ancient Hindu traditions and timeless wisdom.
          </p>

          {/* Hero Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0 1rem 0', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore More
            </button>
            <button className="btn btn-secondary" onClick={() => onBookPuja()}>
              Connect With Us
            </button>
          </div>

          {/* Quick highlight cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '4rem',
              textAlign: 'left'
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(26, 26, 46, 0.65)'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 153, 51, 0.15)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: 'var(--saffron)'
                }}
              >
                <Flame size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--gold)' }}>Dhimahi</h4>
                <small style={{ color: 'var(--text-muted)' }}>Think / Contemplation</small>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(26, 26, 46, 0.65)'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 215, 0, 0.15)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: 'var(--gold)'
                }}
              >
                <Compass size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--gold)' }}>Viveka</h4>
                <small style={{ color: 'var(--text-muted)' }}>Choose / Discrimination</small>
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(26, 26, 46, 0.65)'
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 105, 180, 0.15)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: 'var(--lotus-pink)'
                }}
              >
                <HeartHandshake size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--gold)' }}>Ananda </h4>
                <small style={{ color: 'var(--text-muted)' }}>Relish / Perennial Joy</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
