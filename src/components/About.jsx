import React from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';
import iskonImg from '../assets/iskon.jpg';

/**
 * @param {{ onLearnMore?: () => void }} props
 */
export default function About({ onLearnMore }) {
  const handleLearnMore = () => {
    if (typeof onLearnMore === 'function') {
      onLearnMore();
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Our Club</h2>
          <p className="section-description">
            Is a vibrant community where people come together to learn, grow, connect, and explore their potential.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Image Block with Floating Mantra Card */}
          <div style={{ position: 'relative' }}>
            <img
              src={iskonImg}
              alt="ISKCON Temple"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-dark)',
                border: '1px solid rgba(255, 153, 51, 0.2)',
                display: 'block'
              }}
            />

            {/* Sanskrit Mantra Overlay Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'rgba(26, 26, 46, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--saffron)',
                borderRadius: '20px',
                padding: '1.25rem 1.75rem',
                boxShadow: 'var(--shadow-saffron)',
                maxWidth: '260px'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mantra)',
                  fontSize: '1.25rem',
                  color: 'var(--gold)',
                  marginBottom: '4px',
                  fontWeight: '700'
                }}
              >
              Mahamantra
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--saffron-light)', margin: 0 }}>
                Hare Krşņa Hare Krşņa Krsna Krsna Hare Hare <br/> Hare Rama Hare Rama Rāma Rāma Hare Hare
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 style={{ marginBottom: '1.25rem', fontSize: '2.1rem' }}>
              Embarking the Journey of Self Discovery
            </h3>

            <p style={{ marginBottom: '1.25rem' }}>
              Rooted in the timeless principles of Sanātana Dharma, Awakend is a space where young minds come together to explore spirituality, 
              culture, knowledge, and meaningful service..
            </p>

            <p style={{ marginBottom: '2rem' }}>
              Through satsaṅga, kīrtana, discussions, festivals, and seva, we strive to preserve timeless traditions while inspiring 
              a life of purpose, devotion, and positive contribution to society.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  className="service-icon"
                  style={{ width: '54px', height: '54px', marginBottom: 0, fontSize: '1.2rem' }}
                >
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--gold)', fontSize: '1.4rem', margin: 0 }}>20+</h4>
                  <small style={{ color: 'var(--text-muted)' }}>Event</small>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  className="service-icon"
                  style={{ width: '54px', height: '54px', marginBottom: 0, fontSize: '1.2rem' }}
                >
                  <Users size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--gold)', fontSize: '1.4rem', margin: 0 }}>15+</h4>
                  <small style={{ color: 'var(--text-muted)' }}>Members</small>
                </div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={handleLearnMore}>
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
