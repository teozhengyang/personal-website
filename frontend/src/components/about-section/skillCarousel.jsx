import { useRef, useEffect } from 'react';
import { skillCategories } from '../../constants/aboutSection';

export default function SkillCarousel() {
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;

    // Wheel scroll for horizontal
    const handleWheel = (e) => {
      if (container && container.contains(e.target)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    // Mouse dragging
    const handleMouseDown = (e) => {
      if (!container) return;
      isDragging.current = true;
      container.classList.add('cursor-grabbing');
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current || !container) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Scroll-fast multiplier
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container?.classList.remove('cursor-grabbing');
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseUp);
      container.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseUp);
        container.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);

  return (
    <div className="space-y-6" data-aos="fade-left">
      <h2 className="text-xl font-bold text-left text-[#4A5568] dark:text-[#A0AEC0]">🧰 Skills</h2>

      <div className="relative text-[#4A5568] dark:text-[#A0AEC0] overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
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
      </div>
    </div>
  );
}
