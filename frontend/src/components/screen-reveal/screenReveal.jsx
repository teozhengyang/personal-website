import { useEffect } from 'react';
import './screenReveal.css';

export default function ScreenReveal({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="curtain-container">
      <div className="curtain curtain-left" />
      <div className="curtain curtain-right" />
    </div>
  );
}
