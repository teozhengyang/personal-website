import 'aos/dist/aos.css';

import AboutText from './aboutText';
import ProfileImage from './profileImage';

export default function AboutSection() {

  return (
    <div className="px-6 py-10 scroll-mt-16 font-jetbrains" id="about">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3" data-aos="fade-down">
          <h1 className="text-4xl font-extrabold text-[#F8FAFC] pb-3">About Me</h1>
          <hr className="w-16 border-[#6699CC] border-t-2" />
        </div>

        {/* About & Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
          <AboutText />
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
