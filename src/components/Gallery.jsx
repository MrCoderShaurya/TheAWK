import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    category: 'ceremonies',
    title: 'Sacred Maha Aarti',
    subtitle: 'Daily Evening Lamp Ceremony',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80'
  },
  {
    id: 2,
    category: 'festivals',
    title: 'Holi Colors Celebration',
    subtitle: 'Festival of Joy & Devotion',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9uhlroHVELvNMzI9ni214FMFwfktjVIdCg&s'
  },
  {
    id: 3,
    category: 'meditation',
    title: 'Morning Dhyana Session',
    subtitle: 'Silent Meditation & Pranayama',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  },
  {
    id: 4,
    category: 'architecture',
    title: 'Vedic Gopuram Architecture',
    subtitle: 'Carved Sacred Temple Towers',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
  },
  {
    id: 5,
    category: 'ceremonies',
    title: 'Vedic Havan Yajna',
    subtitle: 'Purification Fire Ritual',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'
  },
  {
    id: 6,
    category: 'festivals',
    title: 'Deepavali Festival of Lights',
    subtitle: 'Illuminated Diya Lamps',
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=800&q=80'
  },
  {
    id: 7,
    category: 'meditation',
    title: 'Outdoor Yoga Retreat',
    subtitle: 'Harmonizing Body & Nature',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80'
  },
  {
    id: 8,
    category: 'architecture',
    title: 'Golden Sanctum Shrine',
    subtitle: 'Divine Deity Sanctum',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80'
  }
];

/**
 * @param {{ onOpenLightbox?: (item: any) => void }} props
 */
export default function Gallery({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Divine Moments & Gallery</h2>
          <p className="section-description">
            Visual glimpses of our spiritual celebrations, sacred architecture, and community gatherings
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Moments
          </button>
          <button 
            className={`filter-btn ${filter === 'ceremonies' ? 'active' : ''}`}
            onClick={() => setFilter('ceremonies')}
          >
            Ceremonies
          </button>
          <button 
            className={`filter-btn ${filter === 'festivals' ? 'active' : ''}`}
            onClick={() => setFilter('festivals')}
          >
            Festivals
          </button>
          <button 
            className={`filter-btn ${filter === 'meditation' ? 'active' : ''}`}
            onClick={() => setFilter('meditation')}
          >
            Meditation
          </button>
          <button 
            className={`filter-btn ${filter === 'architecture' ? 'active' : ''}`}
            onClick={() => setFilter('architecture')}
          >
            Architecture
          </button>
        </div>

        {/* Grid Container */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => onOpenLightbox(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
                <div 
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 153, 51, 0.9)',
                    color: 'var(--bg-dark)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center'
                  }}
                >
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
