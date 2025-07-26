import { useRef, useEffect } from 'react';
import { skillCategories } from '../../constants/aboutSectionContent';

export default function SkillCarousel() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (container && container.contains(e.target)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="space-y-6" data-aos="fade-left">
      <h2 className="text-xl font-bold text-left text-[#4A5568]">🧰 Skills</h2>

      <div className="relative text-[#4A5568] overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto overflow-y-hidden px-4 sm:px-8 pb-2 scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {skillCategories.map(({ category, skills }, idx) => (
            <div
              key={idx}
              className="min-w-[150px] sm:min-w-[150px] flex-shrink-0 card bg-base-200 p-4 rounded-xl hover:shadow-xl scroll-snap-align-start transition"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-base-100 border border-base-300 text-sm rounded-full px-3 py-1 shadow-sm text-center w-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 bg-[#F7FAFC] hover:bg-[#E2E8F0] p-2 rounded-full shadow-md transition z-10"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 bg-[#F7FAFC] hover:bg-[#E2E8F0] p-2 rounded-full shadow-md transition z-10"
        >
          →
        </button>
      </div>
    </div>
  );
}
