import NavBar from '../components/navbar-section/navBar';
import LandingSection from '../components/landing-section/landingSection';
import AboutSection from '../components/about-section/aboutSection';
import ExperienceSection from '../components/experience-section/experienceSection';
import ProjectSection from '../components/project-section/projectSection';
import FooterSection from '../components/footer-section/footerSection';

export default function HomePage() {
  const homeMenuItems = [
    { label: 'About', type: 'anchor', target: '#about' },
    { label: 'Experience', type: 'anchor', target: '#experience' },
    { label: 'Projects', type: 'anchor', target: '#projects' },
    { label: 'Blog', type: 'route', target: '/blog' },
  ];

  return (
    <div className="bg-[#1A202C] text-[#F8FAFC]">
      <NavBar menuItems={homeMenuItems} />
      <LandingSection />
      <div className="max-w-[70%] mx-auto">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </div>
      <FooterSection />
    </div>
  );
}
