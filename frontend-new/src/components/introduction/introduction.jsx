import mypicture from './mypicture1.jpg'
import { useRef } from 'react'

const experiences = [
  { company: "Synapxe", role: "Full Stack Developer Intern", time: "May 2025 - Present" },
  { company: "HTX", role: "Software Developer Intern", time: "May 2024 - Aug 2024" },
];

const skillCategories = [
  {
    category: "UI/UX",
    skills: ["Figma", "Tailwind CSS", "DaisyUI", "MaterialUI"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Django", "Spring Boot"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "AngularJS"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "Git", "AWS", "Azure"],
  },  
  {
    category: "AI/ML",
    skills: ["OpenAI Agentic SDK"],
  },
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript"]
  }
];

export default function Introduction() {

  {/* functions for scrolling in skills */}
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="p-8 space-y-6 max-w-[1500px] mx-auto" id="about">
      {/* Header */}
      <h1 className="text-3xl font-bold text-left">About Me</h1>
      <div className="divider"></div>

      {/* Body: 3-column */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left: About Text */}
        <div className="space-y-4">
          <h2 className="text-lg text-gray-300 font-bold">Introduction</h2>
          <p>
            I'm Zheng Yang, a Computer Science undergraduate at the National University of Singapore (NUS), 
            specialising in database systems and artificial intelligence.
            My passion lies in full-stack development, particularly in designing, building, 
            and deploying end-to-end solutions that are efficient, scalable, and user-friendly.
          </p>
          <p>
            Outside of tech, I’m an avid football and basketball fan, a Formula 1 enthusiast, 
            and someone who finds joy in music festivals 
            and traveling the world to experience diverse cultures and perspectives.
          </p>
        </div>

        {/* Center: Work Experience */}
        <div className="space-y-4">
          <h2 className="text-lg text-gray-300 font-bold">Experiences</h2>
          <ul className="space-y-4">
            {experiences.map((exp, idx) => (
              <li key={idx} className="rounded-lg p-4 bg-base-200">
                <div className="text-xs text-gray-400">{exp.time}</div>
                <div className="font-semibold">{exp.company}</div>
                <div className="text-sm text-gray-300">{exp.role}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 overflow-hidden">
            <img
              src={mypicture}
              alt="Zheng Yang"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      {/* Bottom: Skill Set Cards */}
      <div className="space-y-6">
        <h2 className="text-lg text-gray-300 font-bold text-left">Skills</h2>

        <div className="relative">
          {/* Cards container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-hidden px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {skillCategories.map(({ category, skills }, idx) => (
              <div
                key={idx}
                className="min-w-[250px] card bg-base-200 p-4 scroll-snap-align-start"
              >
                <h3 className="text-base font-semibold mb-2">{category}</h3>
                <ul className="space-y-2 text-sm">
                  {skills.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Left/Right Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-base-300 p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-base-300 p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>

    </div>
  );
}
