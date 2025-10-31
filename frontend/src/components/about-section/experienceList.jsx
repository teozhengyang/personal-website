import { experiences } from '../../constants/aboutSection';

export default function ExperienceList() {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-xl font-bold text-[#4A5568] dark:text-[#A0AEC0]">Experiences</h2>
      <ul className="space-y-4">
        {experiences.map((exp, idx) => (
          <li key={idx} className="rounded-xl p-4 bg-base-200 shadow-md hover:shadow-lg transition">
            <div className="text-[#4A5568] dark:text-[#A0AEC0] mb-1">
              <span className="font-bold">{exp.role}</span>
            </div>
            <div className="font-semibold text-[#4A5568] dark:text-[#A0AEC0] mb-1">{exp.company}</div>
            <div className="text-sm text-[#4A5568] dark:text-[#A0AEC0] mt-2 mb-2">{exp.description}</div>
            <div className="text-sm text-[#718096] dark:text-[#A0AEC0] mt-1">{exp.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
