import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc'; // Icono logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Ícono alineado a la izquierda */}
        <div className="flex items-center">
          <FcBusinessman className="text-3xl" />
          <span className="ml-2 text-xl font-bold">YonnyDev</span>
        </div>

        {/* Menú de navegación */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
          <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* Botón de menú para móviles */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles con animación */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden md:hidden bg-black`}
      >
        <ul className="space-y-4 px-4 py-2">
          <li><a href="#about" className="block hover:underline">About</a></li>
          <li><a href="#resume" className="block hover:underline">Resume</a></li>
          <li><a href="#portfolio" className="block hover:underline">Portfolio</a></li>
          <li><a href="#contact" className="block hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
