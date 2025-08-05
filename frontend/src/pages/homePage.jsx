import useRevealControl from '../hooks/useRevealControl';

import NavBar from '../components/navbar-section/navBar';
import HomeSection from '../components/home-section/homeSection';
import AboutSection from '../components/about-section/aboutSection';
import ProjectSection from '../components/project-section/projectSection';
import BlogSection from '../components/blog-section/blogSection';
import FooterSection from '../components/footer-section/footerSection';
import RippleReveal from '../components/ripple-reveal/rippleReveal';

export default function HomePage() {
  const {
    waitingForClick,
    animationStarted,
    showContent,
    startReveal,
    finishReveal,
  } = useRevealControl(6000);

  return (
    <>
      {waitingForClick && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <button
            className="btn btn-primary btn-lg animate-pulse shadow-lg"
            onClick={startReveal}
          >
            Click to Enter
          </button>
        </div>
      )}

      {animationStarted && <RippleReveal onFinish={finishReveal} />}

      {showContent && (
        <div data-aos="fade-up">
          <NavBar />
          <HomeSection />
          <AboutSection />
          <ProjectSection />
          <BlogSection />
          <FooterSection />
        </div>
      )}
    </>
  );
}
