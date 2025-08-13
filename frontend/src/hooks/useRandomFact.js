import { useState, useEffect } from 'react';
import RandomFactService from '../services/RandomFact';

export default function useRandomFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    RandomFactService.getRandomFact().then((randomFact) => {
      setFact(randomFact);
    });
  }, []);

  return fact;
}
