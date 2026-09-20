import React, { useState } from 'react';
import { Heart, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const donationCategories = [
  { id: 'annadanam', title: 'Annadanam (Food Seva)', icon: '🍚', description: 'Provide sacred nutritious vegetarian meals to devotees and those in need.' },
  { id: 'temple', title: 'Temple Restoration', icon: '🛕', description: 'Support the upkeep, sanctum maintenance, and traditional temple preservation.' },
  { id: 'education', title: 'Vedic Youth Education', icon: '📖', description: 'Sponsor Sanskrit learning, sloka books, and moral education for children.' },
  { id: 'puja', title: 'Puja & Havan Sponsorship', icon: '🪔', description: 'Sponsor daily Aarti, flowers, oil lamps, and sacred fire offerings.' }
];

const presetAmounts = [21, 51, 108, 251, 508];

export default function Donation({ onSuccess }) {
  const [selectedCategory, setSelectedCategory] = useState('annadanam');
  const [selectedAmount, setSelectedAmount] = useState(108);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  const handlePresetClick = (amt) => {
    setSelectedAmount(amt);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setIsCustom(true);
    if (e.target.value) {
      setSelectedAmount(Number(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = isCustom ? (Number(customAmount) || 108) : selectedAmount;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    onSuccess({
      amount: finalAmount,
      category: donationCategories.find(c => c.id === selectedCategory)?.title || 'General Seva',
      isRecurring
    });
  };

  return (
    <section id="donation" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Sacred Seva & Donation</h2>
          <p className="section-description">
            Your generous contributions sustain our temple, feed thousands, and propagate timeless Vedic wisdom
          </p>
        </div>

        <div className="glass-card" style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 2.5rem' }}>
          <form onSubmit={handleSubmit}>
            {/* Category Selector */}
            <h4 style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>
              1. Select Seva Cause:
            </h4>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {donationCategories.map((cat) => (
                <div 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    background: selectedCategory === cat.id ? 'var(--bg-card-hover)' : 'rgba(15, 15, 26, 0.6)',
                    border: selectedCategory === cat.id ? '2px solid var(--saffron)' : '1px solid rgba(255, 153, 51, 0.15)',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
                  <h4 style={{ fontSize: '1rem', color: selectedCategory === cat.id ? 'var(--saffron)' : 'var(--text-primary)', marginBottom: '4px' }}>
                    {cat.title}
                  </h4>
                  <small style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {cat.description}
                  </small>
                </div>
              ))}
            </div>

            {/* Amount Selector */}
            <h4 style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>
              2. Select Donation Amount ($ USD):
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  onClick={() => handlePresetClick(amt)}
                  className="btn"
                  style={{
                    flex: '1',
                    minWidth: '80px',
                    background: (!isCustom && selectedAmount === amt) ? 'var(--gradient-saffron)' : 'rgba(15, 15, 26, 0.7)',
                    color: (!isCustom && selectedAmount === amt) ? 'var(--bg-dark)' : 'var(--text-primary)',
                    border: (!isCustom && selectedAmount === amt) ? 'none' : '1px solid rgba(255, 153, 51, 0.3)',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}
                >
                  ${amt}
                </button>
              ))}

              <div style={{ flex: '1.5', minWidth: '140px' }}>
                <input 
                  type="number"
                  placeholder="Custom Amount ($)"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="form-control"
                  style={{ height: '100%', borderRadius: '50px', padding: '0 1.25rem' }}
                />
              </div>
            </div>

            {/* Recurring Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2.5rem' }}>
              <input 
                type="checkbox" 
                id="recurringCheck"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--saffron)', cursor: 'pointer' }}
              />
              <label htmlFor="recurringCheck" style={{ color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.95rem' }}>
                Make this a recurring monthly offering for ongoing spiritual support
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
              <Heart size={20} />
              Complete Sacred Contribution (${isCustom ? (customAmount || 0) : selectedAmount})
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
