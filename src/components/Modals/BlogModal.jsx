import React from 'react';
import { X, Calendar, User, Clock } from 'lucide-react';

export default function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <img 
          src={post.image} 
          alt={post.title}
          style={{
            width: '100%',
            maxHeight: '280px',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            background: 'rgba(0, 0, 0, 0.3)',
            display: 'block'
          }}
        />

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} style={{ color: 'var(--saffron)' }} />
            {post.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <User size={14} style={{ color: 'var(--gold)' }} />
            {post.author}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} style={{ color: 'var(--saffron-light)' }} />
            {post.readTime}
          </span>
        </div>

        <h2 style={{ fontSize: '1.75rem', color: 'var(--gold)', textAlign: 'left', marginBottom: '1rem' }}>
          {post.title}
        </h2>

        <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1rem', fontWeight: '500', color: 'var(--saffron-light)' }}>
            "{post.excerpt}"
          </p>
          <p style={{ marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
            {post.fullContent}
          </p>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 153, 51, 0.2)', textAlign: 'right' }}>
          <button className="btn btn-outline btn-sm" onClick={onClose}>Close Article</button>
        </div>
      </div>
    </div>
  );
}
