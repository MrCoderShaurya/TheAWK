import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const eventsList = [
  {
    id: 'holi-2026',
    day: '15',
    month: 'Mar',
    title: 'Holi Festival Celebration',
    description: 'The Festival of Colors - Celebrate the victory of devotion with spiritual music, classical raagas, and organic herbal colors.',
    time: '10:00 AM - 6:00 PM',
    location: 'Temple Grounds & Courtyard'
  },
  {
    id: 'ram-navami-2026',
    day: '22',
    month: 'Mar',
    title: 'Ram Navami Mahotsav',
    description: 'Divine birth celebration of Lord Rama featuring Ramayana recitations, special Abhishek Puja, and Mahaprasadam distribution.',
    time: '6:00 AM - 8:00 PM',
    location: 'Main Temple Sanctum'
  },
  {
    id: 'hanuman-jayanti-2026',
    day: '05',
    month: 'Apr',
    title: 'Hanuman Jayanti Chanting',
    description: 'Continuous 108 recitation of Sunderkand and Hanuman Chalisa with special blessings for strength and courage.',
    time: '4:00 AM - 9:00 PM',
    location: 'Hanuman Shrine'
  },
  {
    id: 'gita-jayanti-2026',
    day: '12',
    month: 'Apr',
    title: 'Gita Jayanti Wisdom Workshop',
    description: 'Immersive 1-day retreat exploring the practical application of Bhagavad Gita in modern life led by revered Gurus.',
    time: '9:00 AM - 5:00 PM',
    location: 'Meditation Hall'
  }
];

/**
 * @param {{ onRegisterEvent?: (evt: any) => void }} props
 */
export default function Events({ onRegisterEvent }) {
  return (
    <section 
      id="events" 
      style={{ background: 'linear-gradient(180deg, #0F0F1A 0%, #08080F 100%)' }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Upcoming Sacred Events</h2>
          <p className="section-description">
            Participate in auspicious festivals, Satsangs, and community spiritual gatherings
          </p>
        </div>

        <div className="events-grid">
          {eventsList.map((evt) => (
            <div key={evt.id} className="event-card">
              <div className="event-date">
                <span className="day">{evt.day}</span>
                <span className="month">{evt.month}</span>
              </div>

              <div className="event-content">
                <h3 style={{ fontSize: '1.25rem', color: 'var(--saffron-light)', marginBottom: '0.5rem' }}>
                  {evt.title}
                </h3>

                <p style={{ fontSize: '0.92rem', marginBottom: '1rem', flex: 1 }}>
                  {evt.description}
                </p>

                <div className="event-meta">
                  <span>
                    <Clock size={15} style={{ color: 'var(--saffron)' }} />
                    {evt.time}
                  </span>
                  <span>
                    <MapPin size={15} style={{ color: 'var(--gold)' }} />
                    {evt.location}
                  </span>
                </div>

                <button 
                  className="btn btn-primary btn-sm" 
                  onClick={() => onRegisterEvent(evt)}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <Sparkles size={14} />
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
