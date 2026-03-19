import logo from '../../assets/navbar-section/logo.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from "hamburger-react";

export default function NavBar({ menuItems = [] }) {

  const [isOpen, setOpen] = useState(false);

  const defaultItems = [
    { label: 'About', type: 'anchor', target: '#about' },
    { label: 'Experience', type: 'anchor', target: '#experience' },
    { label: 'Projects', type: 'anchor', target: '#projects' },
    { label: 'Blog', type: 'route', target: '/blog' },
  ];

  const items = menuItems.length ? menuItems : defaultItems;

  const sharedClassName = "px-3 py-2 rounded-md font-bold hover:text-[#F8FAFC] hover:bg-transparent transition-all duration-200 text-base";

  const renderItem = (item, isMobile = false) => {
    const label = item.label;
    const key = `${item.type}-${item.target}`;

    if (item.type === 'route') {
      return (
        <li key={key} className={isMobile ? 'list-none' : ''}>
          <NavLink
            to={item.target}
            end={item.target === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isMobile
                ? `block px-3 py-2 font-semibold transition-all duration-200 text-base ${
                    isActive ? 'text-[#F8FAFC]' : 'text-[#6699CC] hover:text-[#F8FAFC]'
                  }`
                : `${sharedClassName} ${isActive ? 'text-[#F8FAFC]' : 'text-[#6699CC]'}`
            }
          >
            {label}
          </NavLink>
        </li>
      );
    }

    return (
      <li key={key} className={isMobile ? 'list-none' : ''}>
        <a
          href={item.target}
          onClick={(e) => {
            if (!isMobile) {
              e.currentTarget.blur();
            }
            setOpen(false);
          }}
          className={isMobile ? "block px-3 py-2 font-semibold hover:text-[#F8FAFC] transition-all duration-200 text-base text-[#6699CC]" : sharedClassName}
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <div className="navbar bg-[#1D1F24] fixed top-0 z-50 text-[#6699CC] font-jetbrains">
      {/* Logo */}
      <div className="flex-1 items-center space-x-3 ml-4">
        <Link to="/" aria-label="Go to home page" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex-none md:hidden relative">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#6699CC" />
        {isOpen && (
          <ul className="absolute right-0 top-full mt-2 z-50 p-2 shadow bg-[#1D1F24] rounded-box w-40 flex flex-col gap-1">
            {items.map((item) => renderItem(item, true))}
          </ul>
        )}
      </div>

      {/* Horizontal menu for desktop */}
      <div className="flex-none hidden md:block mr-2">
        <ul className="menu menu-horizontal px-2 text-base space-x-2 touch-manipulation">
          {items.map((item) => renderItem(item))}
        </ul>
      </div>
    </div>
  );
}
