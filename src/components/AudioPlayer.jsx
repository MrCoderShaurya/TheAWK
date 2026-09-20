import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Stop ambient sound
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          if (oscillatorRef.current) {
            try { oscillatorRef.current.stop(); } catch (e) {}
          }
          setIsPlaying(false);
        }, 1000);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Start ambient 432 Hz Om resonance sound via Web Audio API
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Base 432Hz sine wave (Sacred Cosmic Pitch)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Harmonizer LFO for gentle pulse
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        
        lfo.frequency.value = 0.2; // Slow breathing wave 0.2 Hz
        lfoGain.gain.value = 0.05;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(432, ctx.currentTime); // 432 Hz Om Frequency

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2); // Soft swell

        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        lfo.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;

        // Play periodic temple bell chime sound
        playTempleBell(ctx);

        setIsPlaying(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    }
  };

  const playTempleBell = (ctx) => {
    if (!ctx) return;
    try {
      const bellOsc = ctx.createOscillator();
      const bellGain = ctx.createGain();

      bellOsc.type = 'sine';
      bellOsc.frequency.setValueAtTime(1080, ctx.currentTime); // High resonant chime

      bellGain.gain.setValueAtTime(0.15, ctx.currentTime);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

      bellOsc.connect(bellGain);
      bellGain.connect(ctx.destination);

      bellOsc.start(ctx.currentTime);
      bellOsc.stop(ctx.currentTime + 3.5);
    } catch (e) {}
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="audio-widget" title="Ambient Sacred 432Hz Om & Bell Sound">
      <button className="audio-btn" onClick={toggleSound} aria-label="Toggle Sacred Sound">
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      <div className="audio-info">
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} style={{ color: 'var(--saffron)' }} />
          {isPlaying ? 'Sacred Om Sound (432Hz)' : 'Play Sacred Sound'}
        </span>
      </div>
    </div>
  );
}
