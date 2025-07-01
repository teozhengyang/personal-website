import header from './header1.jpg'

export default function LandingPage() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${header})` }}
      id="home"
    >      
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md px-4">
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">
            Zheng Yang
          </h1>
          <hr className="my-6 sm:my-8 border-gray-900" />
          <p className="mb-5 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 drop-shadow-lg">
            Building ideas into code
          </p>
        </div>
      </div>
    </div>
  );
}