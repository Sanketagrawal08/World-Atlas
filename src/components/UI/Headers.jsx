import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center py-7 px-8 shadow-md">
      
      <NavLink 
        to="/" 
        className="text-2xl font-bold tracking-wide hover:text-gray-400 transition duration-300"
      >
        🌐 World Atlas
      </NavLink>

      
      <nav className="flex gap-6 text-lg font-medium">
        <NavLink 
          to="/" 
          className="hover:text-gray-400 transition duration-300"
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className="hover:text-gray-400 transition duration-300"
        >
          About
        </NavLink>
        <NavLink 
          to="/country" 
          className="hover:text-gray-400 transition duration-300"
        >
          Country
        </NavLink>
        <NavLink 
          to="/contact" 
          className="hover:text-gray-400 transition duration-300"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Headers;
