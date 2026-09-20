import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import srtImg from '../assets/srt.jpg';
import airportImg from '../assets/airport.jpg';
import gevImg from '../assets/gev.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Khichdi vs Burger vs Chicken',
    excerpt: 'Discover why the cosmic number 108 resonates throughout astronomy, mantra chanting, and human spiritual anatomy.',
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

/**
 * @param {{ onSelectPost?: (post: any) => void }} props
 */
export default function Blog({ onSelectPost }) {
  return (
    <section id="blog">
      <div className="container">
        <div className="section-header">
          <h2>Awakened Insights</h2>
          <p className="section-description">
            Daily spiritual facts
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {blogPosts.map((post) => (
            <div key={post.id} className="glass-card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'var(--gradient-saffron)',
                    color: 'var(--bg-dark)',
                    fontWeight: '700',
                    fontSize: '0.75rem',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    textTransform: 'uppercase'
                  }}
                >
                  {post.tag}
                </span>
              </div>

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div 
                  style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    fontSize: '0.85rem', 
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem' 
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} style={{ color: 'var(--saffron)' }} />
                    {post.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} style={{ color: 'var(--gold)' }} />
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--gold)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {post.title}
                </h3>

                <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem', flex: 1 }}>
                  {post.excerpt}
                </p>

                <button 
                  className="btn btn-outline btn-sm" 
                  onClick={() => onSelectPost(post)}
                  style={{ alignSelf: 'flex-start' }}
                >
                  Read Article
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
