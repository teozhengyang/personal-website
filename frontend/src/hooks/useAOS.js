import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useAOS(options = { duration: 1000, once: false }) {
  useEffect(() => {
    AOS.init(options);
  }, [options]);
}
