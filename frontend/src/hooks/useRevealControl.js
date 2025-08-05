import { useState, useEffect } from 'react';

export default function useRevealControl(autoStartDelay = 6000) {
  const [waitingForClick, setWaitingForClick] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!waitingForClick) return;

    const timer = setTimeout(() => {
      startReveal();
    }, autoStartDelay);

    return () => clearTimeout(timer);
  }, [waitingForClick, autoStartDelay]);

  function startReveal() {
    setWaitingForClick(false);
    setAnimationStarted(true);
  }

  function finishReveal() {
    setShowContent(true);
    setAnimationStarted(false);
  }

  return {
    waitingForClick,
    animationStarted,
    showContent,
    startReveal,
    finishReveal,
  };
}
