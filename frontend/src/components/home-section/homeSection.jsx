import home from '../../assets/home-section/hero.JPG';
import { Typewriter } from 'react-simple-typewriter'
import { FiChevronDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function HomeSection() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat relative font-jetbrains overflow-hidden"
      style={{ backgroundImage: `url(${home})` }}
      id="home"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-xl px-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] drop-shadow-lg">
            Zheng Yang
          </h1>

          <hr className="my-6 border-[#F8FAFC]" />

          {/* Subtitle wrapper with fixed height and flex centering */}
          <div className="mb-5 mr-1 h-14 flex items-center justify-center">

            <p className="text-lg sm:text-xl md:text-3xl font-semibold text-[#F8FAFC] drop-shadow-lg">
              <Typewriter
                words={[
                  'Building ideas into code',
                  'Automating the future',
                  'Bridging code and creativity'
                ]}
                loop
                cursor
                typeSpeed={30}
                deleteSpeed={30}
                delaySpeed={800}
              />
            </p>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col 
        items-center gap-1 transition-opacity duration-500 
        ${hasScrolled ? 'opacity-0 pointer-events-none' : 'animate-bounce opacity-100'}`}>
        <span className="text-[#F8FAFC] text-sm font-semibold tracking-widest uppercase">Scroll</span>
        <FiChevronDown className="w-8 h-8 text-[#F8FAFC]" strokeWidth={2} />
      </div>
    </div>
  );
}
