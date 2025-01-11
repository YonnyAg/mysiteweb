import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc'; // Icono logo
import './Navbar.css'; // Importar el archivo CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Cambiar el estado si se ha hecho scroll
      } else {
        setIsScrolled(false); // Restaurar al estado original si no hay scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-[#041037] py-3' : 'bg-transparent py-6'
        } text-white fixed w-full top-0 left-0 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo o Ícono alineado a la izquierda */}
          <div className="flex items-center">
            <FcBusinessman className="text-3xl" />
            <span className="ml-2 text-xl font-bold">YonnyDev</span>
          </div>

          {/* Menú de navegación */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#resume" className="nav-link">Resume</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
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
    </>
  );
};

export default Navbar;
