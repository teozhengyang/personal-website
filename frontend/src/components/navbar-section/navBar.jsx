import logo from '../../assets/navbar-section/logo.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from "hamburger-react";

export default function NavBar({ items }) {

  const [isOpen, setOpen] = useState(false);
  const isSamePage = (link) => link.startsWith('#');

  return (
    <div className="navbar bg-[#1D1F24] fixed top-0 z-50 text-[#6699CC] font-jetbrains">
      {/* Logo */}
      <div className="flex-1 items-center space-x-3 ml-4">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex-none md:hidden relative">
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#6699CC" />
        {isOpen && (
          <ul className={`absolute right-0 top-full mt-2 z-50 p-2 shadow bg-[#1D1F24] rounded-box flex flex-col gap-1`}>
            {items.map((item) => (
              <li key={`${item.name}-${item.link}`} className="list-none">
                {isSamePage(item.link) ? (
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 font-semibold hover:text-[#F8FAFC] transition-all duration-200 text-base text-[#6699CC]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 font-semibold transition-all duration-200 text-base ${
                        isActive ? 'text-[#F8FAFC]' : 'text-[#6699CC] hover:text-[#F8FAFC]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Horizontal menu for desktop */}
      <div className="flex-none hidden md:block mr-2">
        <ul className="menu menu-horizontal px-2 text-base space-x-2 touch-manipulation">
          {items.map((item) => (
            <li key={`${item.name}-${item.link}`}>
              {isSamePage(item.link) ? (
                <a
                  href={item.link}
                  onClick={(e) => e.currentTarget.blur()}
                  className="px-3 py-2 rounded-md font-bold hover:text-[#F8FAFC] hover:bg-transparent transition-all duration-200 text-base"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  to={item.link}
                  onClick={(e) => e.currentTarget.blur()}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-bold transition-all duration-200 text-base ${
                      isActive
                        ? 'text-[#F8FAFC]'
                        : 'text-[#6699CC] hover:text-[#F8FAFC] hover:bg-transparent'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
