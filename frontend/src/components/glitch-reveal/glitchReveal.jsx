import { useEffect } from 'react';
import './glitchReveal.css';

export default function GlitchReveal({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500); // duration of glitch animation

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="glitch-overlay">
      <div className="glitch-text" aria-hidden="true"> </div>
      <div className="glitch-text" aria-hidden="true"> </div>
      <div className="glitch-text" aria-hidden="true"> </div>
    </div>
  );
}
