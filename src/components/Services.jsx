import React from 'react';
import { Flame, Sun, BookOpen, HeartPulse, GraduationCap, HeartHandshake } from 'lucide-react';

const servicesList = [
  {
    id: 'puja',
    icon: Flame,
    title: 'Kirtan',
    description: 'Kirtan is a devotional singing practice that awakens the heart through the melodic repetition of divine names and mantras.'
  },
  {
    id: 'yoga',
    icon: Sun,
    title: 'Yoga & Meditation',
    description: 'Daily sessions in Hatha Yoga, Pranayama breathwork, and guided Dhyana meditation for inner tranquility and mental clarity.'
  },
  {
    id: 'scripture',
    icon: BookOpen,
    title: 'Scripture & Philosophy',
    description: 'Weekly discourses on Bhagavad Gita, Upanishads, and Sanatana Vedanta philosophy led by senior spiritual scholars.'
  },
  {
    id: 'ayurveda',
    icon: HeartPulse,
    title: 'Books',
    description: 'Great Indian books, spiritual books, books on religion, philosophy, and culture.'
  },
  {
    id: 'children',
    icon: GraduationCap,
    title: "Children's Vedic Classes",
    description: 'Sanskrit language, Vedic sloka chanting, moral stories, and cultural heritage education for young minds.'
  },
  {
    id: 'seva',
    icon: HeartHandshake,
    title: 'Community Seva',
    description: 'Selfless service opportunities including Annadanam (sacred food distribution), healthcare camps, and environmental care.'
  }
];

/**
 * @param {{ onBookService?: (service: any) => void }} props
 */
export default function Services({ onBookService }) {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Spiritual Features</h2>
          <p className="section-description">
            Comprehensive sacred offerings to nourish your mind, body, and soul on the path of self-realization
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {servicesList.map((service) => {
            const IconComp = service.icon;
            return (
              <div key={service.id} className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="service-icon">
                  <IconComp size={32} />
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--saffron-light)' }}>
                  {service.title}
                </h3>

                <p style={{ flex: 1, fontSize: '0.98rem', marginBottom: '1.25rem' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
