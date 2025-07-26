import { useState, useEffect } from 'react';

export default function useRandomFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then((res) => res.json())
      .then((data) => setFact(data.text))
      .catch((err) => console.error('Failed to fetch useless fact:', err));
  }, []);

  return fact;
}
