import { FiGithub } from 'react-icons/fi';
import { projects_dict } from '../../constants/projectSection';

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects_dict.map((project, idx) => (
        <div
          key={idx}
          className="group flex flex-col overflow-hidden rounded-xl bg-[#1D1F24] border border-[#6699CC]/25"
          data-aos="fade-up"
          data-aos-delay={idx * 80}
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 space-y-3">
            <h2 className="font-bold text-base text-[#F8FAFC]">{project.title}</h2>
            <p className="text-sm leading-relaxed text-[#F8FAFC] flex-1">{project.description}</p>

            {/* Links */}
            <div className="flex items-center gap-4 pt-1">
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#6699CC] hover:text-[#F8FAFC] transition-colors duration-150"
                >
                  <FiGithub className="text-base" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
