import SocialLinks from './socialLinks';
import RandomFact from './randomFact';

export default function FooterSection() {
  return (
    <footer
      className="text-base-content p-10 rounded-t-3xl mt-10 font-jetbrains bg-[#1D1F24]"
    >
      <div className="flex flex-col justify-center items-center gap-5 text-base max-w-xl mx-auto text-center">
        <div
          className="text-xl font-bold text-[#6699CC]"
        >
          {"Let's Connect"}
        </div>
        <SocialLinks />
        <RandomFact />
      </div>
    </footer>
  );
}
