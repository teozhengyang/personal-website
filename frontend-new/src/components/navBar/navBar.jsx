import logo from './logo.png';

export default function navBar() {
  return (
    <div className="navbar bg-base-200 sticky top-0 z-50 ">
      {/* logo on the left */}
      <div className="flex-1">
          <img src={logo} alt="Logo" className="h-10 w-10 ml-5" />   
      </div>
      {/* logo on the right */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </div>
  );
}