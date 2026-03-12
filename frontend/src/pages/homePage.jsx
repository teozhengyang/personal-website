import NavBar from '../components/navbar-section/navBar';
import HomeSection from '../components/home-section/homeSection';
import AboutSection from '../components/about-section/aboutSection';
import ProjectSection from '../components/project-section/projectSection';
import FooterSection from '../components/footer-section/footerSection';

export default function HomePage() {

  return (
    <div>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}
