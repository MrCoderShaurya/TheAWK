import React, { useState } from 'react';
import { X, Flame, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PujaModal({ service, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    devoteeName: '',
    email: '',
    phone: '',
    serviceType: service ? service.title : 'Sacred Puja & Havan',
    gotra: '',
    preferredDate: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
    } catch (err) {}
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle size={56} style={{ color: 'var(--saffron)', marginBottom: '1.25rem' }} />
            <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Puja Booking Received!</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              May Lord Ganesha and the Divine Mother bless your family, <strong>{formData.devoteeName}</strong>. 
              Our head priest will reach out to confirm your Sankalpa details for <strong>{formData.serviceType}</strong>.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Close Confirmation</button>
          </div>
        ) : (
          <div>
            <h3 style={{ color: 'var(--gold)', marginBottom: '0.5rem', fontSize: '1.6rem' }}>
              Schedule Sacred Service
            </h3>
            <p style={{ color: 'var(--saffron-light)', fontWeight: '600', marginBottom: '1.5rem' }}>
              {formData.serviceType}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Devotee Full Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-control"
                  placeholder="Full name for Sankalpa"
                  value={formData.devoteeName}
                  onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Email *</label>
                <input 
                  type="email" 
                  required 
                  className="form-control"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp *</label>
                <input 
                  type="tel" 
                  required 
                  className="form-control"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Gotra / Nakshatra (Optional)</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Family Gotra or Star (if known)"
                  value={formData.gotra}
                  onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Date *</label>
                <input 
                  type="date" 
                  required
                  className="form-control"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Special Intention / Sankalpa Details</label>
                <textarea 
                  rows={3} 
                  className="form-control"
                  placeholder="Health, birthday blessings, housewarming, peace..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Flame size={18} />
                Submit Service Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
