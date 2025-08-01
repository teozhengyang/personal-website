import NavBar from '../components/navbar-section/navBar';
import HomeSection from '../components/home-section/homeSection';
import AboutSection from '../components/about-section/aboutSection';
import ProjectSection from '../components/project-section/projectSection';
import BlogSection from '../components/blog-section/blogSection';
import FooterSection from '../components/footer-section/footerSection';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <FooterSection />
    </>
  )
}
