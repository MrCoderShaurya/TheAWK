import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Yoga & Meditation Practitioner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote: 'This temple has transformed my life. The daily meditation sessions and the wisdom shared by the gurus have brought immense peace and clarity to my chaotic everyday life.'
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'Community Member & Volunteer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: 'The authenticity of the Vedic rituals and the warmth of the community here is unmatched. My family has found a spiritual home away from home filled with divine vibrations.'
  },
  {
    id: 3,
    name: 'Emma Laurent',
    role: 'Parent & Sanskrit Teacher',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote: "The children's Vedic classes have been wonderful for my kids. They are learning Sanskrit slokas, values of respect and kindness, and developing a deep spiritual foundation."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section style={{ background: 'linear-gradient(180deg, #08080F 0%, #0F0F1A 100%)' }}>
      <div className="container">
        <div className="section-header">
          <h2>What People Say About Us....</h2>
          <p className="section-description">
            Heartfelt stories and reflections from our spiritual community
          </p>
        </div>

        <div 
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Quote Icon Badge */}
          <div 
            style={{ 
              width: '60px', 
              height: '60px', 
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: 'rgba(255, 153, 51, 0.15)',
              border: '1px solid var(--saffron)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold)',
              boxShadow: 'var(--shadow-saffron)'
            }}
          >
            <Quote size={28} />
          </div>

          {/* 5-star Rating */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '1.25rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          {/* Review Text */}
          <p 
            style={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              marginBottom: '1.75rem'
            }}
          >
            "{testimonials[current].quote}"
          </p>

          <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '2px' }}>
            {testimonials[current].name}
          </h4>
          <small style={{ color: 'var(--saffron-light)', fontSize: '0.9rem' }}>
            {testimonials[current].role}
          </small>

          {/* Next/Prev Buttons */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              left: '-22px',
              right: '-22px',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              zIndex: 10
            }}
          >
            <button 
              onClick={prevSlide}
              style={{
                pointerEvents: 'auto',
                background: 'rgba(26, 26, 46, 0.95)',
                border: '1px solid var(--saffron)',
                color: 'var(--gold)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextSlide}
              style={{
                pointerEvents: 'auto',
                background: 'rgba(26, 26, 46, 0.95)',
                border: '1px solid var(--saffron)',
                color: 'var(--gold)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '1.75rem' }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: idx === current ? '32px' : '10px',
                height: '10px',
                borderRadius: '10px',
                background: idx === current ? 'var(--gradient-saffron)' : 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
