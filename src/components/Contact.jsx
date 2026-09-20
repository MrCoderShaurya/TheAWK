import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

/**
 * @param {{ onSendMessage?: (data: { name: string }) => void }} props
 */
export default function Contact({ onSendMessage }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setContactSubmitted(true);
    if (typeof onSendMessage === 'function') {
      onSendMessage(formData);
    }
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" style={{ background: 'linear-gradient(180deg, #0F0F1A 0%, #08080F 100%)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Contacts</h2>
          <p className="section-description">
            We welcome your questions and inquiries. Reach out to connect with our team.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}
        >
          {/* Info Block */}
          <div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '1.5rem' }}>
              Sacred Sanctuary
            </h3>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255, 153, 51, 0.15)', color: 'var(--saffron)', padding: '10px', borderRadius: '50%' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--gold)', display: 'block' }}>Phone & WhatsApp</strong>
                  <span>+91 91723 34362</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255, 153, 51, 0.15)', color: 'var(--saffron)', padding: '10px', borderRadius: '50%' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--gold)', display: 'block' }}>Email Enquiries</strong>
                  <span>asmit.borade24@vit.edu</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255, 153, 51, 0.15)', color: 'var(--saffron)', padding: '10px', borderRadius: '50%' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <strong style={{ color: 'var(--gold)', display: 'block' }}>Calling Hours</strong>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1.25rem' }}>
              Send Us a Message
            </h3>

            {contactSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle size={48} style={{ color: 'var(--saffron)', marginBottom: '1rem' }} />
                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Message Received!</h4>
                <p>Thank you for reaching out. May divine peace be with you. We will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Puja Inquiry, Event Registration, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="form-control" 
                    placeholder="How may we assist you on your spiritual path?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
