import React, { useState, useEffect } from 'react';

const counterData = [
  { target: 50, suffix: '+', label: 'Book Reading' },
  { target: 15000, suffix: '+', label: 'Lectures' },
  { target: 108, suffix: '+', label: 'Facts' },
  { target: 24, suffix: '', label: 'Sacred Festivals' }
];

export default function Counters() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('counter-section');
      if (el && !hasAnimated) {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setHasAnimated(true);
          animateCounters();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(counterData.map(item => {
        const progress = step / steps;
        return Math.floor(item.target * Math.min(progress, 1));
      }));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);
  };

  return (
    <div className="counter-section" id="counter-section">
      <div className="container">
        <div className="counter-grid">
          {counterData.map((item, index) => (
            <div className="counter-box" key={index}>
              <div className="counter-number">
                {counts[index].toLocaleString()}{item.suffix}
              </div>
              <div className="counter-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
