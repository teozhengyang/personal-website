import mypicture from './mypicture.jpg'
import { useRef, useEffect } from 'react'
import { experiences, skillCategories } from './introductionContent.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Introduction() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animate on every scroll into view
    });
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="p-8 space-y-10 max-w-[1500px] mx-auto" id="about">
      {/* Header */}
      <div className="space-y-4" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-left text-[#6699CC]">About Me</h1>
        <div className="divider m-0"></div>
      </div>

      {/* Body: 3-column */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left: About Text */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-xl font-bold text-[#4A5568]">
            👋 Hi, I'm <span className="text-[#6699CC]">Zheng Yang</span>
          </h2>
          <p className="text-[#4A5568] leading-relaxed">
            I'm a Computer Science undergraduate at <span className="font-semibold">NUS</span>, specialising in
            <span className="font-semibold"> database systems</span> and <span className="font-semibold">artificial intelligence</span>.
            My passion lies in <span className="font-semibold">full-stack development</span>: designing, building, and deploying 
            efficient, scalable, and user-friendly end-to-end solutions.
          </p>
          <p className="text-[#4A5568] leading-relaxed">
            Outside of tech, I’m an avid <span className="italic">football</span> and <span className="italic">basketball</span> fan, a <span className="italic">Formula 1</span> enthusiast, 
            and someone who finds joy in <span className="italic">music festivals</span> and <span className="italic">traveling</span> the world to experience diverse cultures and perspectives.
          </p>
        </div>

        {/* Center: Work Experience */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-xl font-bold text-[#4A5568]">👨‍💼 Experiences</h2>
          <ul className="space-y-4">
            {experiences.map((exp, idx) => (
              <li key={idx} className="rounded-xl p-4 bg-base-200 shadow-md hover:shadow-lg transition">
                <div className="text-[#4A5568] mb-1">
                  <span className="font-semibold">{exp.role}</span>
                </div>
                <div className="text-[#4A5568] mb-1">{exp.company}</div>
                <div className="text-sm text-[#718096] mt-1">{exp.time}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center" data-aos="zoom-in">
          <div className="w-72 h-72 rounded-full border-4 border-[#6699CC] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={mypicture}
              alt="Zheng Yang"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom: Skill Set Cards */}
      <div className="space-y-6" data-aos="fade-left">
        <h2 className="text-xl font-bold text-left text-[#4A5568]">🧰 Skills</h2>

        <div className="relative text-[#4A5568]">
          {/* Cards container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-hidden px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {skillCategories.map(({ category, skills }, idx) => (
              <div
                key={idx}
                className="min-w-[250px] card bg-base-200 p-4 rounded-xl hover:shadow-xl scroll-snap-align-start transition"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-semibold mb-3">{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-base-100 border border-base-300 text-sm rounded-full px-3 py-1 shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#F7FAFC] hover:bg-[#E2E8F0] p-2 rounded-full shadow-md transition"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#F7FAFC] hover:bg-[#E2E8F0] p-2 rounded-full shadow-md transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
