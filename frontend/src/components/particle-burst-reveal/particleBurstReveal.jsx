import { useEffect } from 'react';
import './particleBurstReveal.css';

export default function ParticleBurstReveal({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  const particles = Array.from({ length: 30 }).map((_, i) => (
    <div key={i} className="particle" style={{ '--i': i }} />
  ));

  return <div className="particle-burst-container">{particles}</div>;
}
