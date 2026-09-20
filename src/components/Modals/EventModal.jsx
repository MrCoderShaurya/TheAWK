import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ event, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    participants: '1',
    requirements: ''
  });

  if (!event) return null;

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
            <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Registration Complete!</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              May divine blessings be with you, <strong>{formData.fullName}</strong>. 
              You are registered for <strong>{event.title}</strong> on <strong>{event.month} {event.day}</strong>.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Close Confirmation</button>
          </div>
        ) : (
          <div>
            <h3 style={{ color: 'var(--gold)', marginBottom: '0.5rem', fontSize: '1.6rem' }}>
              Register for Event
            </h3>
            <p style={{ color: 'var(--saffron-light)', fontWeight: '600', marginBottom: '1.5rem' }}>
              {event.title} ({event.month} {event.day})
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-control"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
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
                <label className="form-label">Phone Number *</label>
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
                <label className="form-label">Number of Attendees</label>
                <select 
                  className="form-control"
                  value={formData.participants}
                  onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ Family Group</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Special Requirements / Notes</label>
                <textarea 
                  rows={3} 
                  className="form-control"
                  placeholder="Seating accessibility, prasad diet requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Sparkles size={18} />
                Confirm Event Registration
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
