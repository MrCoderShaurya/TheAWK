import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Volume2, Quote } from 'lucide-react';

const slokas = [
  {
    id: 1,
    chapter: 'Bhagavad Gita 2.47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: 'karmaṇy-evādhikāras te mā phaleṣu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi',
    english: 'You have a right to perform your prescribed duties, but you are never entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.',
    meaning: 'Focus on pure dedication to duty with devotion and selflessness, surrendering the outcomes to the divine.'
  },
  {
    id: 2,
    chapter: 'Bhagavad Gita 4.7',
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham',
    english: 'Whenever there is a decline in righteousness (Dharma) and a rise in unrighteousness, O Bharata, at that time I manifest Myself on Earth.',
    meaning: 'The divine force eternally restores cosmic balance and spiritual order whenever truth is shadowed.'
  },
  {
    id: 3,
    chapter: 'Bhagavad Gita 6.6',
    sanskrit: 'बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥',
    transliteration: 'bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ\nanātmanas tu śatrutve vartetātmaiva śatru-vat',
    english: 'For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain his greatest enemy.',
    meaning: 'Mastering our inner thoughts through meditation and discipline unlocks supreme tranquility and strength.'
  }
];

export default function Teachings() {
  const [activeSloka, setActiveSloka] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSloka((prev) => (prev + 1) % slokas.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="teachings">
      <div className="container">
        <div className="section-header">
          <h2>Sacred Teachings & Wisdom</h2>
          <p className="section-description">
            Explore immortal verses from the Bhagavad Gita and ancient Vedic scriptures
          </p>
        </div>

        {/* Sloka Cards Container */}
        <div 
          className="glass-card" 
          style={{ 
            maxWidth: '900px', 
            height: '590px',
            margin: '0 auto', 
            padding: '2.25rem 2.25rem 1.75rem',
            textAlign: 'center',
            background: 'var(--bg-card)',
            border: '1px solid var(--saffron-glow)',
            boxShadow: 'var(--shadow-saffron)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div 
              style={{ 
                color: 'var(--saffron)', 
                fontSize: '2rem',
                display: 'flex',
                justify: 'center',
                marginBottom: '0.4rem' 
              }}
            >
              <Quote size={40} style={{ opacity: 0.6 }} />
            </div>

            <span 
              style={{ 
                fontFamily: 'var(--font-mantra)', 
                color: 'var(--gold)', 
                letterSpacing: '2px',
                fontSize: '1rem',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem'
              }}
            >
              {slokas[activeSloka].chapter}
            </span>

            <p 
              style={{ 
                fontFamily: 'var(--font-mantra)', 
                fontSize: 'clamp(1.15rem, 2.5vw, 1.65rem)', 
                color: 'var(--saffron-light)', 
                lineHeight: 1.5,
                whiteSpace: 'pre-line',
                marginBottom: '0.75rem',
                fontWeight: '600',
                minHeight: '75px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 0 0.75rem 0'
              }}
            >
              {slokas[activeSloka].sanskrit}
            </p>

            <p 
              style={{ 
                fontStyle: 'italic', 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem',
                marginBottom: '1rem',
                whiteSpace: 'pre-line',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              "{slokas[activeSloka].transliteration}"
            </p>

            <div 
              style={{ 
                background: 'rgba(15, 15, 26, 0.6)', 
                padding: '1rem 1.25rem', 
                borderRadius: '16px',
                borderLeft: '4px solid var(--gold)',
                textAlign: 'left',
                marginBottom: '1rem',
                minHeight: '135px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h4 style={{ color: 'var(--gold)', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                English Translation:
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.55 }}>
                {slokas[activeSloka].english}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', paddingTop: '0.25rem' }}>
            {slokas.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSloka(idx)}
                style={{
                  width: idx === activeSloka ? '36px' : '12px',
                  height: '12px',
                  borderRadius: '10px',
                  background: idx === activeSloka ? 'var(--gradient-saffron)' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                aria-label={`Sloka ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
