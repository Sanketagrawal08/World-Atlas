import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center py-7 px-8 shadow-md">
      <NavLink
        to="/"
        className="text-2xl font-bold tracking-wide hover:text-gray-200 transition duration-300"
      >
        🌐 World Atlas
      </NavLink>

      <div className="lg:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </div>

      <nav className="hidden lg:flex gap-6 text-lg font-medium">
        <NavLink to="/" className="hover:text-gray-200 transition duration-300">
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-gray-200 transition duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="/country"
          className="hover:text-gray-200 transition duration-300"
        >
          Country
        </NavLink>
      </nav>

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col gap-6 absolute top-20 right-0 bg-gray-700 p-6 w-full text-center lg:hidden`}
      >
        <NavLink
          to="/"
          className="hover:text-gray-200 transition duration-300"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-gray-200 transition duration-300"
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/country"
          className="hover:text-gray-200 transition duration-300"
          onClick={closeMenu}
        >
          Country
        </NavLink>
      </div>
    </header>
  );
};

export default Headers;
