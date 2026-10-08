import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ExternalLink 
} from 'lucide-react';
import srtImg from '../assets/srt.jpg';
import airportImg from '../assets/airport.jpg';
import gevImg from '../assets/gev.jpg';
import iskonImg from '../assets/iskon.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Khichdi vs Burger vs Chicken',
    excerpt: 'The 3 Gunas (Sattva, Rajas, Tamas) explain how diet profoundly shapes your consciousness, thoughts, and destiny.',
    date: 'Feb 10, 2026',
    author: 'Srila Prabhupada',
    readTime: '5 min read',
    tag: 'Fact',
    image: srtImg,
    fullContent: 'Sāttvika "pure", Rajasika "dim", and Tamasika "dark"\nWe take up worship of the Lord based on our gunas, Sattvik worhip Rajasik worship or Tamasic worship\nIn Sattvik Worship the presiding deity of Sattva Guna "Vishnu" and the result of such worship is that the bhakti of the bhakta is called Sattvik Bhakti.\nIn Rajasic Worship the presiding deity of Rajo Guna is "Brahma" and the result of such worship is that the bhakti of the bhakta is called Rajasic Bhakti.\nIn Tamasic Worship the presideing deity of Tamo Guna is "Siva" are and the result of such worship is that the bhakti of the bhakta is called Tamasic Bhakti.\n\nSatvik Foods increase the duration of life, purify one’s existence and give strength, health, happiness and satisfaction. Such foods are juicy, wholesome, and pleasing to the heart.\n\nRajshik Foods are too bitter, too sour, salty, hot, pungent, dry and burning are dear to those in the mode of passion. Such foods cause distress, misery and disease.\n\nTamshik Food prepared more than three hours before being eaten, food that is tasteless, decomposed and putrid, and food consisting of remnants and untouchable things.'
  },
  {
    id: 2,
    title: 'A Nigerian speaking Hindi at Denver Airport',
    excerpt: 'Bollywood’s influence reaches far beyond India, shaping how people across the world experience Indian culture.',
    date: 'Jan 28, 2026',
    author: 'Chaitanya Charan Das',
    readTime: '7 min read',
    tag: 'Incident',
    image: airportImg,
    fullContent: 'At Denver airport, a Nigerian wheelchair assistant surprised me by speaking fluent Hindi, which she had learned through years of watching Bollywood movies. She especially loved Salman Khan and Dangal, showing how Bollywood can influence people far beyond India.Her interaction reminded me of a past conversation with a Bollywood director, who said that many NRIs rely on Bollywood to introduce Indian culture to their children. I realized that although Bollywood often portrays only limited aspects of Indian culture, it may be one of the strongest influences shaping the world’s perception of India.Other traditions, such as Buddhism and Christianity, have effectively used cinema and social media to spread their teachings. Our tradition still lacks a comparable presence, though initiatives like Hare Krishna TV are helping bridge this gap.This simple encounter strengthened my conviction that we should make bhakti wisdom accessible to a much wider audience through powerful and engaging media.'
  },
  {
    id: 3,
    title: 'Simple Living High Thinking',
    excerpt: 'From crowded cities to peaceful villages, the vision is to restore a simpler, more natural, and spiritually centered way of life.',
    date: 'Jan 14, 2026',
    author: 'Bhakti Raghava Swami',
    readTime: '4 min read',
    tag: 'Importance',
    image: gevImg,
    fullContent: 'Vedic culture was traditionally centered around peaceful village life, agriculture, land, and cows. Srila Prabhupada emphasized “simple living and high thinking,” encouraging people to remain connected with the land and live in self-sufficient village communities rather than becoming increasingly dependent on cities and artificial economic systems. He stressed that village organization was an important part of his vision for the Krishna consciousness movement. Such a lifestyle allows people to live more peacefully, naturally, and sustainably while giving greater opportunity for spiritual cultivation.'
  }
];

export default function Blog({ onSelectPost }) {
  const [activeTile, setActiveTile] = useState(null);

  // Dynamic image slots for the aesthetic layout
  const portalImgTop = srtImg;
  const portalImgLeft = airportImg;
  const portalImgArch = gevImg;
  const polaroidImg = iskonImg;

  // Play subtle gentle chime on touch
  const playTone = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio context restricted
    }
  };

  const handleTileClick = (tileData) => {
    playTone();
    setActiveTile(tileData);
  };

  return (
    <section id="blog" className="insights-grid-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--saffron)', marginBottom: '0.5rem', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            <Sparkles size={16} />
            <span>The Three Gunas & Sacred Wisdom</span>
          </div>
          <h2 style={{ letterSpacing: '0.02em' }}>Awakened Insights</h2>
        </div>

        {/* THE UNIFIED 3x3 PUZZLE GRID: GREEN FOR SATVIK, RED FOR RAJSHIK, BLACK FOR TAMSHIK */}
        <div className="puzzle-grid-wrapper">
              
              {/* TILE 1 (Row 1, Col 1): SATVIK (GREEN) */}
              <div 
                className="puzzle-tile tile-satvik"
                onClick={() => handleTileClick({
                  title: 'Satvik (Sattva Guna)',
                  headline: 'The Mode of Goodness & Purity',
                  verse: 'Bhagavad Gita 17.8',
                  text: 'Sāttvika represents purity, clarity, health, and joy. Satvik foods increase duration of life, purify existence, and bring inner peace and strength.',
                  theme: 'satvik',
                  postRef: 1
                })}
              >
                {/* Organic Petal Curve with Green Glow */}
                <div 
                  className="puzzle-curve-light" 
                  style={{ 
                    top: '-15%', 
                    left: '-15%', 
                    width: '130%', 
                    height: '110%', 
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    background: 'radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%)'
                  }}
                />
                
                {/* Botanical Branch Line Art in Emerald Green */}
                <svg className="botanical-svg" style={{ top: '8px', right: '8px', width: '48px', height: '48px', stroke: 'rgba(110, 231, 183, 0.8)' }} viewBox="0 0 100 100">
                  <path d="M 20 80 Q 40 40 80 20" />
                  <path d="M 45 52 Q 60 48 55 35 Q 40 40 45 52" />
                  <path d="M 60 38 Q 75 32 70 20 Q 55 26 60 38" />
                  <path d="M 32 65 Q 20 55 28 45 Q 38 52 32 65" />
                </svg>

                <div style={{ position: 'relative', zIndex: 3, marginTop: 'auto', marginBottom: 'auto' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '800', color: '#6EE7B7', display: 'block', marginBottom: '4px' }}>
                    MODE OF GOODNESS
                  </span>
                  <h3 className="editorial-serif-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', letterSpacing: '0.02em', lineHeight: 1.05, color: '#ECFDF5' }}>
                    Satvik
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: '#D1FAE5', opacity: 0.95, display: 'block', marginTop: '6px' }}>
                    Purity • Health • Joy
                  </span>
                </div>

                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399', boxShadow: '0 0 8px #10B981' }} />
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', fontWeight: '700', textTransform: 'uppercase', color: '#F0FDF4' }}>
                    Sattva • Gita 17.8
                  </span>
                </div>
              </div>

              {/* TILE 2 (Row 1, Col 2): RAJSHIK (RED) */}
              <div 
                className="puzzle-tile tile-rajshik"
                onClick={() => handleTileClick({
                  title: 'Rajshik (Rajo Guna)',
                  headline: 'The Mode of Passion & Agitation',
                  verse: 'Bhagavad Gita 17.9',
                  text: 'Rājasika is born of intense longing, ambition, and restless craving. Rajshik foods are overly pungent, salty, and dry, leading to distress and agitation.',
                  theme: 'rajshik',
                  img: portalImgTop,
                  postRef: 1
                })}
              >
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '800', color: '#FCA5A5' }}>
                    MODE OF PASSION
                  </span>
                </div>

                {/* Circular Portal Window Cutout with Ruby Red Ring */}
                <div className="portal-window-circle" style={{ width: '70%', margin: '0 auto', borderColor: 'rgba(248, 113, 113, 0.75)' }}>
                  <img 
                    src={portalImgTop} 
                    alt="Rajshik Mode of Passion"
                    onError={(e) => { e.currentTarget.src = srtImg; }}
                  />
                </div>

                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', marginTop: '4px' }}>
                  <h3 className="editorial-serif-title" style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', letterSpacing: '0.02em', lineHeight: 1.05, margin: 0, color: '#FFF1F2' }}>
                    Rajshik
                  </h3>
                  <span style={{ fontSize: '0.68rem', color: '#FFE4E6', opacity: 0.95, display: 'block', marginTop: '3px' }}>
                    Passion • Craving • Motion
                  </span>
                </div>
              </div>

              {/* TILE 3 (Row 1, Col 3): TAMSHIK (BLACK) */}
              <div 
                className="puzzle-tile tile-tamshik"
                onClick={() => handleTileClick({
                  title: 'Tamshik (Tamo Guna)',
                  headline: 'The Mode of Ignorance & Inertia',
                  verse: 'Bhagavad Gita 17.10',
                  text: 'Tāmasika causes delusion, indolence, and darkness. Tamshik foods are stale, decomposed, and unclean, dragging down mind and vitality.',
                  theme: 'tamshik',
                  img: airportImg,
                  postRef: 1
                })}
              >
                {/* 4 Swatch Palette Dots in Dark / Monochromatic Tones */}
                <div className="swatch-dots-row">
                  <div className="swatch-dot" style={{ background: '#09090C', border: '1px solid rgba(255,255,255,0.25)' }} />
                  <div className="swatch-dot" style={{ background: '#1F242E', border: '1px solid rgba(255,255,255,0.25)' }} />
                  <div className="swatch-dot" style={{ background: '#374151', border: '1px solid rgba(255,255,255,0.25)' }} />
                  <div className="swatch-dot" style={{ background: '#9CA3AF', border: '1px solid rgba(255,255,255,0.25)' }} />
                </div>

                <div style={{ position: 'relative', zIndex: 3, margin: 'auto 0' }}>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '800', color: '#9CA3AF', display: 'block', marginBottom: '4px' }}>
                    MODE OF IGNORANCE
                  </span>
                  <h3 className="editorial-serif-title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', letterSpacing: '0.02em', lineHeight: 1.05, color: '#F9FAFB' }}>
                    Tamshik
                  </h3>
                  <span style={{ fontSize: '0.72rem', color: '#D1D5DB', opacity: 0.95, display: 'block', marginTop: '6px' }}>
                    Inertia • Stagnation • Sleep
                  </span>
                  <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #9CA3AF, transparent)', marginTop: '8px' }} />
                </div>

                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6B7280', boxShadow: '0 0 8px rgba(255,255,255,0.3)' }} />
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', fontWeight: '700', textTransform: 'uppercase', color: '#E5E7EB' }}>
                    Tamas • Gita 17.10
                  </span>
                </div>
              </div>

              {/* TILE 4 (Row 2, Col 1): Organic Oval Window Photo & Vertical Link */}
              <div 
                className="puzzle-tile tile-golden-deep"
                style={{ padding: '0.65rem' }}
                onClick={() => handleTileClick({
                  title: 'Global Devotion',
                  headline: 'Cultural Resonance & Faith',
                  verse: 'Denver Airport',
                  text: 'A Nigerian assistant speaking fluent Hindi, connected through Bollywood and love for Indian spirituality.',
                  img: portalImgLeft,
                  postRef: 2
                })}
              >
                <div style={{ display: 'flex', width: '100%', height: '100%', gap: '8px', alignItems: 'center' }}>
                  {/* Organic Portal Cutout */}
                  <div 
                    style={{ 
                      flex: 1, 
                      height: '92%', 
                      borderRadius: '50% 50% 45% 45% / 60% 60% 40% 40%', 
                      overflow: 'hidden', 
                      border: '2.5px solid rgba(255, 225, 100, 0.75)',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.35)' 
                    }}
                  >
                    <img 
                      src={portalImgLeft} 
                      alt="Cultural resonance" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.currentTarget.src = airportImg; }}
                    />
                  </div>

                  {/* Vertical Text matching reference */}
                  <div className="puzzle-vertical-link">
                    WWW.THEAWAKENED.ORG
                  </div>
                </div>
              </div>

              {/* TILE 5 (Row 2, Col 2 - CENTER): "The Latest Style" + Botanical Marigold */}
              <div 
                className="puzzle-tile tile-golden-primary"
                onClick={() => handleTileClick({
                  title: 'The Sattvic Style',
                  headline: 'Ancient Wisdom for Modern Life',
                  verse: 'Modes of Nature',
                  text: 'Transcending low energy (Tamas) and restless agitation (Rajas) through pure Sattvic lifestyle choices.',
                  theme: 'satvik',
                  postRef: 1
                })}
              >
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: '800', textTransform: 'uppercase', color: 'var(--saffron)' }}>
                    ESSENTIAL
                  </span>
                  <h3 className="editorial-serif-title" style={{ fontSize: '1.5rem', lineHeight: '1.1', marginTop: '4px' }}>
                    The<br />Sattvic<br />Style
                  </h3>
                </div>

                {/* Botanical Marigold Flower Line-Art SVG in bottom right */}
                <svg className="botanical-svg" style={{ bottom: '-10px', right: '-10px', width: '110px', height: '110px' }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="14" stroke="rgba(255, 215, 0, 0.5)" />
                  <path d="M 50 36 C 45 20, 55 20, 50 36" />
                  <path d="M 50 64 C 45 80, 55 80, 50 64" />
                  <path d="M 36 50 C 20 45, 20 55, 36 50" />
                  <path d="M 64 50 C 80 45, 80 55, 64 50" />
                  <path d="M 40 40 C 28 28, 38 22, 40 40" />
                  <path d="M 60 60 C 72 72, 62 78, 60 60" />
                  <path d="M 40 60 C 28 72, 22 62, 40 60" />
                  <path d="M 60 40 C 72 28, 78 38, 60 40" />
                </svg>

                <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFFFFF' }} />
                  <span style={{ fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Goodness
                  </span>
                </div>
              </div>

              {/* TILE 6 (Row 2, Col 3): Arched Window Upper Half */}
              <div 
                className="puzzle-tile tile-golden-soft"
                style={{ padding: '0.6rem 0.6rem 0 0.6rem' }}
                onClick={() => handleTileClick({
                  title: 'Simple Living High Thinking',
                  headline: 'Govardhan Eco-Village Vision',
                  verse: 'Srila Prabhupada Teachings',
                  text: 'Returning to peaceful village life, agriculture, cow protection, and sustainable Vedic communities.',
                  img: portalImgArch,
                  postRef: 3
                })}
              >
                {/* Botanical flower floating over arch */}
                <svg className="botanical-svg" style={{ top: '8px', left: '10px', width: '38px', height: '38px', zIndex: 5 }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="12" />
                  <path d="M 50 38 C 45 24, 55 24, 50 38" />
                  <path d="M 38 50 C 24 45, 24 55, 38 50" />
                  <path d="M 62 50 C 76 45, 76 55, 62 50" />
                </svg>

                {/* Arched Stone Portal Top */}
                <div 
                  className="portal-window-arch" 
                  style={{ width: '92%', height: '100%', margin: '0 auto', borderRadius: '90px 90px 0 0', borderBottom: 'none' }}
                >
                  <img 
                    src={portalImgArch} 
                    alt="Simple living high thinking" 
                    onError={(e) => { e.currentTarget.src = gevImg; }}
                  />
                </div>
              </div>

              {/* TILE 7 (Row 3, Col 1): Big Bold Quotation Marks & Gita Verse */}
              <div 
                className="puzzle-tile tile-golden-light"
                onClick={() => handleTileClick({
                  title: 'Bhagavad Gita 17.8',
                  headline: 'The Science of Satvik Food',
                  verse: 'Gita 17.8',
                  text: 'Foods dear to those in the mode of goodness increase duration of life, purify existence, give strength, health, happiness, and satisfaction.',
                  theme: 'satvik',
                  postRef: 1
                })}
              >
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <span className="large-quote-mark">“</span>
                  <p className="editorial-serif-quote" style={{ marginTop: '-8px' }}>
                    Foods in goodness increase life, purify existence, and bring health, strength, and joy.
                  </p>
                </div>

                {/* Botanical leaves at bottom */}
                <svg className="botanical-svg" style={{ bottom: '4px', right: '4px', width: '50px', height: '50px' }} viewBox="0 0 100 100">
                  <path d="M 80 80 Q 50 50 20 20" />
                  <path d="M 50 50 Q 30 40 40 30 Q 55 40 50 50" />
                  <path d="M 65 65 Q 45 55 55 45 Q 70 55 65 65" />
                </svg>

                <div style={{ position: 'relative', zIndex: 3 }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', fontWeight: '800', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    — BHAGAVAD GITA 17.8
                  </span>
                </div>
              </div>

              {/* TILE 8 (Row 3, Col 2): Classic Polaroid Photo Frame */}
              <div 
                className="puzzle-tile tile-golden-primary"
                onClick={() => handleTileClick({
                  title: 'Temple Heritage & Sanctuary',
                  headline: 'Spiritual Sanctuary & Vedic Culture',
                  verse: 'ISKCON Heritage',
                  text: 'Experience the serene architecture, sacred chanting, and transcendental atmosphere of the temple.',
                  img: polaroidImg,
                  postRef: 3
                })}
              >
                {/* Botanical sprig in background */}
                <svg className="botanical-svg" style={{ top: '6px', left: '6px', width: '42px', height: '42px' }} viewBox="0 0 100 100">
                  <path d="M 20 80 Q 40 40 80 20" />
                  <path d="M 45 52 Q 60 48 55 35 Q 40 40 45 52" />
                </svg>

                {/* Classic Polaroid Frame matching reference Tile 8 */}
                <div className="polaroid-frame">
                  <img 
                    src={polaroidImg} 
                    alt="Spiritual sanctuary" 
                    onError={(e) => { e.currentTarget.src = iskonImg; }}
                  />
                  <div className="polaroid-date">
                    VEDA • 2026
                  </div>
                </div>
              </div>

              {/* TILE 9 (Row 3, Col 3): Arched Window Lower Half */}
              <div 
                className="puzzle-tile tile-golden-soft"
                style={{ padding: '0 0.6rem 0.6rem 0.6rem' }}
                onClick={() => handleTileClick({
                  title: 'Simple Living High Thinking',
                  headline: 'Govardhan Eco-Village Vision',
                  verse: 'Srila Prabhupada Teachings',
                  text: 'Returning to peaceful village life, agriculture, cow protection, and sustainable Vedic communities.',
                  img: portalImgArch,
                  postRef: 3
                })}
              >
                {/* Arched Stone Portal Bottom */}
                <div 
                  className="portal-window-arch" 
                  style={{ width: '92%', height: '100%', margin: '0 auto', borderRadius: '0', borderTop: 'none' }}
                >
                  <img 
                    src={portalImgArch} 
                    alt="Village eco living" 
                    style={{ transform: 'translateY(-25%) scale(1.08)' }}
                    onError={(e) => { e.currentTarget.src = gevImg; }}
                  />
                </div>
              </div>

            </div>

        {/* TOUCH-INTERACTIVE TILE LIGHTBOX MODAL WITH HARD CORNERS */}
        {activeTile && (() => {
          const isSatvik = activeTile.theme === 'satvik';
          const isRajshik = activeTile.theme === 'rajshik';
          const isTamshik = activeTile.theme === 'tamshik';

          const borderColor = isSatvik ? '#10B981' : isRajshik ? '#EF4444' : isTamshik ? '#6B7280' : 'var(--saffron)';
          const topBorderColor = isSatvik ? '#34D399' : isRajshik ? '#F87171' : isTamshik ? '#9CA3AF' : '#F5CB53';
          const badgeBg = isSatvik ? '#10B981' : isRajshik ? '#EF4444' : isTamshik ? '#374151' : '#F5CB53';
          const badgeColor = isSatvik ? '#022C22' : isRajshik ? '#FFFFFF' : isTamshik ? '#F9FAFB' : '#361F0C';
          const accentColor = isSatvik ? '#6EE7B7' : isRajshik ? '#FCA5A5' : isTamshik ? '#D1D5DB' : 'var(--gold)';
          const glowShadow = isSatvik 
            ? '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(16, 185, 129, 0.35)'
            : isRajshik
            ? '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(239, 68, 68, 0.35)'
            : isTamshik
            ? '0 25px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(107, 114, 128, 0.3)'
            : '0 25px 80px rgba(0, 0, 0, 0.9), 0 0 50px rgba(255, 153, 51, 0.3)';
          const btnGradient = isSatvik
            ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            : isRajshik
            ? 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
            : isTamshik
            ? 'linear-gradient(135deg, #374151 0%, #1F2937 100%)'
            : undefined;

          return (
            <div 
              className="modal-overlay"
              onClick={() => setActiveTile(null)}
              style={{ zIndex: 100000 }}
            >
              <div 
                className="modal-container hard-corner"
                style={{ 
                  maxWidth: '580px', 
                  borderRadius: '0px', 
                  borderTop: `4px solid ${topBorderColor}`,
                  border: `2px solid ${borderColor}`,
                  boxShadow: glowShadow
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close" 
                  style={{ borderRadius: '0px' }}
                  onClick={() => setActiveTile(null)} 
                  aria-label="Close insight"
                >
                  <X size={22} />
                </button>

                {activeTile.img && (
                  <div style={{ width: '100%', maxHeight: '250px', overflow: 'hidden', borderRadius: '0px', marginBottom: '1.25rem', background: '#000', border: `1px solid ${topBorderColor}` }}>
                    <img 
                      src={activeTile.img} 
                      alt={activeTile.title} 
                      onError={(e) => {
                        e.currentTarget.src = srtImg;
                      }}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0px' }}
                    />
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                  <span className="puzzle-badge-pill" style={{ background: badgeBg, color: badgeColor, border: 'none', fontWeight: '800' }}>
                    {activeTile.verse || 'WISDOM'}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: accentColor, fontWeight: '700', letterSpacing: '0.05em' }}>
                    {activeTile.title}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
                  {activeTile.headline}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {activeTile.text}
                </p>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button 
                    className="btn btn-outline btn-sm"
                    style={{ borderRadius: '0px' }}
                    onClick={() => setActiveTile(null)}
                  >
                    Close
                  </button>
                  <button 
                    className="btn btn-primary btn-sm"
                    style={{ 
                      borderRadius: '0px',
                      background: btnGradient,
                      borderColor: topBorderColor,
                      color: isTamshik ? '#F9FAFB' : undefined
                    }}
                    onClick={() => {
                      const post = blogPosts.find(p => p.id === activeTile.postRef) || blogPosts[0];
                      setActiveTile(null);
                      if (onSelectPost) onSelectPost(post);
                    }}
                  >
                    <span>Read Full Article</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
