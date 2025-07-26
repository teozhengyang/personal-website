import { projects_dict } from '../../constants/projectSectionContent';

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-[#4A5568]">
      {projects_dict.map((project, idx) => (
        <div
          key={idx}
          className="card bg-base-200 hover:shadow-xl transition-shadow duration-200 rounded-xl overflow-hidden"
          data-aos="flip-left"
          data-aos-delay={200}
        >
          <figure className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </figure>
          <div className="card-body space-y-3">
            <h2 className="card-title font-bold text-lg">{project.title}</h2>
            <p className="text-sm leading-relaxed">{project.description}</p>
            <div className="card-actions justify-end">
              {project.source && (
                <a href={project.source} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline btn-sm text-[#4A5568] border-[#4A5568] hover:bg-[#4A5568] hover:text-white transition-colors duration-200">
                    Source Code
                  </button>
                </a>
              )}
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline btn-sm text-[#4A5568] border-[#4A5568] hover:bg-[#4A5568] hover:text-white transition-colors duration-200">
                    Website
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
