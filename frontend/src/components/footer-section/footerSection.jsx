import SocialLinks from './socialLinks';
import RandomFact from './randomFact';

export default function FooterSection() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 rounded-xl mt-10 font-inter">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 text-base">
        <SocialLinks />
        <div className="hidden lg:block w-px h-6 bg-base-content/20"></div>
        <RandomFact />
      </div>
    </footer>
  );
}