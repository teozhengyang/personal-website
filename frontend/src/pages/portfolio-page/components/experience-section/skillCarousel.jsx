import { skillCategories } from './constants/experienceSkillText';

export default function SkillCarousel() {
  return (
    <div className="space-y-6" data-aos="fade-left">
      <h2 className="text-xl font-bold text-left text-[#F8FAFC]">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillCategories.map(({ category, skills }, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#1D1F24] border border-[#6699CC]/25"
            data-aos="fade-up"
            data-aos-delay={idx * 60}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[#6699CC] mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs rounded-full px-2.5 py-1 font-medium text-[#F8FAFC] bg-[rgba(102,153,204,0.08)] border border-[#6699CC]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
