import SocialLinks from './socialLinks';
import RandomFact from './randomFact';

export default function FooterSection() {
  return (
    <footer className="footer footer-center bg-base-200 text-lg p-10 rounded-xl mt-10 font-inter">
      <SocialLinks />
      <RandomFact />
    </footer>
  );
}
