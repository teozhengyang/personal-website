import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS';
import ProjectCards from './projectCards';

export default function ProjectSection() {
  useAOS();

  return (
    <div className="p-8 space-y-6 mt-10 max-w-[1500px] mx-auto scroll-mt-20 font-jetbrains" id="projects">
      {/* Header */}
      <h1
        className="text-3xl font-extrabold text-left text-[#6699CC]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Projects
      </h1>
      <div className="divider" data-aos="zoom-in" data-aos-delay="200"></div>

      {/* Cards */}
      <ProjectCards />
    </div>
  );
}
