import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function useAOS() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false});
  }, []);
}
