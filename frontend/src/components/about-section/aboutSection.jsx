import 'aos/dist/aos.css';

import AboutText from './aboutText';
import ExperienceList from './experienceList';
import ProfileImage from './profileImage';
import SkillCarousel from './skillCarousel';

import useAOS from '../../hooks/useAOS';

export default function AboutSection() {
  useAOS({
    duration: 800,
    once: false,
  });

  return (
    <div className="p-8 space-y-6 mt-10 max-w-[1500px] mx-auto scroll-mt-20 font-inter" id="about">
      {/* Header */}
      <div className="space-y-4" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-left text-[#6699CC]">About Me</h1>
        <div className="divider m-0"></div>
      </div>

      {/* About & Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
        <AboutText />
        <ProfileImage />
      </div>

      {/* Experiences */}
      <ExperienceList />

      {/* Skills */}
      <SkillCarousel />
    </div>
  );
}
