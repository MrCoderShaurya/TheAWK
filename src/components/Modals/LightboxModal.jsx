import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 3000 }}>
      <div 
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          style={{
            top: '-40px',
            right: 0,
            background: 'var(--saffron)',
            color: 'var(--bg-dark)',
            padding: '6px'
          }}
        >
          <X size={24} />
        </button>

        <img 
          src={item.image} 
          alt={item.title}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            borderRadius: '16px',
            objectFit: 'contain',
            boxShadow: 'var(--shadow-dark)',
            border: '2px solid var(--saffron)'
          }}
        />

        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--gold)', fontSize: '1.4rem', margin: 0 }}>{item.title}</h3>
          <p style={{ color: 'var(--saffron-light)', fontSize: '1rem' }}>{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
