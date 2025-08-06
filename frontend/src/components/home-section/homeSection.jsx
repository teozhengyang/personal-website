import { TypeAnimation } from 'react-type-animation';
import home from '../../assets/home-section/home.jpg';

export default function HomeSection() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat relative font-inter"
      style={{ backgroundImage: `url(${home})` }}
      id="home"
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md px-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] drop-shadow-lg">
            Zheng Yang
          </h1>

          <hr className="my-6 border-[#F8FAFC]" />

          {/* Subtitle wrapper with fixed height and flex centering */}
          <div className="mb-5 mr-1 h-14 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                1500,
                'Building ideas into code',
                1500,
                'Automating the future',
                1500,
                'Bridging code and creativity',
              ]}
              wrapper="p"
              className="text-lg sm:text-xl md:text-3xl font-semibold text-[#F8FAFC] drop-shadow-lg"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
