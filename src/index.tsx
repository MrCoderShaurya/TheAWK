import React, { useCallback, useEffect, useRef, useState } from "react";
import refVideo from "./assets/ref.mp4";

interface IntroProps {
  onComplete?: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<"playing" | "ending" | "done">("playing");
  const videoRef = useRef<HTMLVideoElement>(null);

  const startEndingPhase = useCallback(() => {
    if (phase !== "playing") return;
    setPhase("ending");
  }, [phase]);

  // Handle smooth visual & audio fade out during ending phase
  useEffect(() => {
    if (phase === "ending") {
      const video = videoRef.current;
      
      // Smoothly fade out audio volume
      const fadeAudioInterval = setInterval(() => {
        if (video && video.volume > 0.05) {
          video.volume = Math.max(0, video.volume - 0.1);
        } else {
          if (video) video.volume = 0;
          clearInterval(fadeAudioInterval);
        }
      }, 80);

      // Complete transition after 1s fade duration
      const completeTimer = setTimeout(() => {
        setPhase("done");
        if (onComplete) {
          onComplete();
        }
      }, 1000);

      return () => {
        clearInterval(fadeAudioInterval);
        clearTimeout(completeTimer);
      };
    }
  }, [phase, onComplete]);

  // Initial video setup & unmuted playback handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.muted = false;

    const playUnmuted = async () => {
      try {
        await video.play();
      } catch (err) {
        // Autoplay with sound restricted by browser; play muted and unmute on first user interaction
        video.muted = true;
        await video.play().catch(() => {});

        const handleUserInteraction = () => {
          if (video) {
            video.muted = false;
            video.play().catch(() => {});
          }
          window.removeEventListener("click", handleUserInteraction);
          window.removeEventListener("touchstart", handleUserInteraction);
          window.removeEventListener("keydown", handleUserInteraction);
        };

        window.addEventListener("click", handleUserInteraction, { once: true });
        window.addEventListener("touchstart", handleUserInteraction, { once: true });
        window.addEventListener("keydown", handleUserInteraction, { once: true });
      }
    };

    playUnmuted();
  }, []);

  // Monitor video playback time to initiate smooth fade out 1 second before end
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration && phase === "playing") {
      const timeRemaining = video.duration - video.currentTime;
      if (timeRemaining <= 1.0) {
        startEndingPhase();
      }
    }
  };

  if (phase === "done") {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#000000',
        opacity: phase === "ending" ? 0 : 1,
        pointerEvents: phase === "ending" ? 'none' : 'auto',
        transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }}
    >
      {/* Fullscreen Video with Smooth Ending Fade Out */}
      <video
        ref={videoRef}
        src={refVideo}
        autoPlay
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={startEndingPhase}
        onError={startEndingPhase}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: phase === "ending" ? 0 : 1,
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </div>
  );
}

export default Intro;
