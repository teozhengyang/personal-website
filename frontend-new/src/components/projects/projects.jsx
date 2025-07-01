import personalWebsite from './assets/personal-website.jpg'
import benchmark from './assets/benchmark.jpg'
import events from './assets/events.jpg'
import schedule from './assets/schedule.png'
import calcifer from './assets/calcifer.jpg'

const projects_dict = [
  {
    title: "Personal Portfolio",
    description: "A modern personal website built with React.js, Tailwind CSS and DaisyUI",
    image: personalWebsite,
    source: "https://github.com/teozhengyang/personal-website",
    website: "https://personal-website-teozhengyangs-projects.vercel.app/"
  },
  {
    title: 'SQLancer Benchmark',
    description: 'A benchmarking tool built using Java and Swing for SQLancer, a testing application for DBMS',
    image: benchmark,
    source: 'https://github.com/teozhengyang/sqlancer_benchmark',
  },
  {
    title: 'Event Planning App',
    description: 'An event planning app built with Django and React.js to help event organisers',
    image: events,
    source: 'https://github.com/teozhengyang/Eventify-Orbital-',
  },
  {
    title: 'Scheduler',
    description: 'A simple scheduling app built with Java and JavaFX',
    image: schedule,
    source: 'https://github.com/teozhengyang/tp',
  },
  {
    title: 'Work in Progress',
    description: 'Check out my profile for more updates!',
    image: calcifer,
    website: 'https://github.com/teozhengyang/',
  }
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