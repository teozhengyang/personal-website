import { experiences } from './assets/experienceSkillText';

export default function ExperienceList() {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-xl font-bold text-[#F8FAFC]">Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="rounded-xl p-5 bg-[#1D1F24]"
            style={{ borderLeft: '2px solid #6699CC' }}
          >
            <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
              <span className="font-bold text-base text-[#6699CC]">
                {exp.role}
              </span>
              <span className="text-sm font-semibold px-2 py-1 rounded-full text-[#6699CC] bg-[rgba(102,153,204,0.15)]">
                {exp.time}
              </span>
            </div>
            <div className="font-semibold text-[#F8FAFC] mb-2">{exp.company}</div>
            <div className="text-sm text-[#F8FAFC]">{exp.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
