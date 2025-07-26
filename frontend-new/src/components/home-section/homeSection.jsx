import home from '../../assets/home-section/home.jpg';

export default function HomeSection() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${home})` }}
      id="home"
    >      
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] drop-shadow-lg">
            Zheng Yang
          </h1>
          <hr className="my-6 border-[#F8FAFC]" />
          <p className="mb-5 mr-1 text-lg sm:text-xl md:text-3xl font-bold text-[#F8FAFC] drop-shadow-lg">
            Building ideas into code
          </p>
        </div>
      </div>
    </div>
  );
}