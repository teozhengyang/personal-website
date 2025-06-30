import header from './header1.jpg'

export default function landingPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${header})`, // background image
      }}
      id="home"
    >
      {/* text in hero section */}
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          {/* name */}
          <h1 className="mb-5 text-7xl font-bold text-gray-900 drop-shadow-lg">Zheng Yang</h1>
          {/* custom divider */}
          <hr className="my-8 border-gray-900" />
          {/* quote */}
          <p className="mb-5 text-2xl font-semibold text-gray-900 drop-shadow-lg">
            Creating real impact with every commit
          </p>
        </div>
      </div>
    </div>
  )
}