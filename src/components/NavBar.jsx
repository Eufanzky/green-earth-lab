import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#3F7E44] p-4 shadow-sm shadow-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">GreenEarthLab</a>
        </div>

        {/* Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/ods" className="hover:text-gray-300">
            Desafíos ODS
          </a>
          <a href="#" className="hover:text-gray-300">
            Noticias
          </a>
          <a href="#" className="hover:text-gray-300">
            Sobre Nosotros
          </a>
          <a href="#" className="hover:text-gray-300">
            Recursos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-500 p-4">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            About
          </a>
          <a href="#" className="block text-white py-2">
            Services
          </a>
          <a href="#" className="block text-white py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
