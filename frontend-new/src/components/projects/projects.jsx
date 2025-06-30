import personalWebsite from './personal-website.jpg'

const projects_dict = [
  {
    title: "Personal Portfolio",
    description: "A modern personal website built with React.js, Tailwind CSS and DaisyUI",
    image: personalWebsite,
    source: "https://github.com/teozhengyang/personal-website",
    website: "https://personal-website-teozhengyangs-projects.vercel.app/"
  },
];

export default function projects() {
  return (
    <div className="p-8 space-y-3 max-w-[1500px] mx-auto" id="projects">
      {/* Header */}
      <h1 className="text-3xl font-bold text-left">Projects</h1>
      <div className="divider"></div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects_dict.map((project, idx) => (
          <div key={idx} className="card bg-base-200 shadow-sm">
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                {project.source && (
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-soft btn-sm">Source Code</button>
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-soft btn-sm">Website</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}