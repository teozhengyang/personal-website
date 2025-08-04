import logo from '../../assets/navbar-section/logo.png';

export default function NavBar() {
  return (
    <div className="navbar bg-base-200 fixed top-0 z-50 text-[#6699CC] shadow-md font-inter">
      {/* Logo */}
      <div className="flex-1 items-center space-x-3 ml-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            {['home', 'about', 'projects', 'blog'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => e.currentTarget.blur()}
                  className="font-semibold hover:text-[#6699EE] focus-visible:text-[#6699EE] transition-all duration-200 text-base"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Horizontal menu for desktop */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-2 text-base space-x-1 touch-manipulation">
          {['home', 'about', 'projects', 'blog'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => e.currentTarget.blur()}
                className="px-3 py-2 rounded-md font-semibold hover:text-[#6699EE] focus-visible:text-[#6699EE] transition-all duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
