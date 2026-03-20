import 'aos/dist/aos.css';
import ExperienceList from './experienceList';
import SkillCarousel from './skillCarousel';

export default function ExperienceSection() {

  return (
    <div className="px-6 py-10 scroll-mt-16 font-jetbrains" id="experience">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold text-[#F8FAFC] pb-3">Experience & Skills</h1>
          <hr className="w-16 border-[#6699CC] border-t-2" />
        </div>

        {/* Experiences */}
        <ExperienceList />

        {/* Skills */}
        <SkillCarousel />
      </div>
    </div>
  );
}
