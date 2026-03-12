import 'aos/dist/aos.css';
import useAOS from '../../hooks/useAOS';
import ProjectCards from './projectCards';

export default function ProjectSection() {
  useAOS();

  return (
    <div className="px-6 py-10 scroll-mt-16 font-jetbrains" id="projects">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold text-[#F8FAFC] pb-3">Projects</h1>
          <hr className="w-16 border-[#6699CC] border-t-2" />
        </div>

        {/* Cards */}
        <ProjectCards />
      </div>
    </div>
  );
}
