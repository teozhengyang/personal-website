import logo from '../../assets/navbar-section/logo.png';

export default function NavBar() {
  return (
    <div className="navbar bg-base-200 fixed top-0 z-50 text-[#6699CC] shadow-md">
      {/* Logo */}
      <div className="flex-1 items-center space-x-3 ml-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Navigation links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 text-base space-x-1">
          {['home', 'about', 'projects', 'blog'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="px-3 py-2 rounded-md font-medium hover:text-[#4A5568] transition-all duration-200"
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
