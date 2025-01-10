import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Primera Columna: Navegación alineada a la izquierda */}
        <div className="flex-1 text-left">
          <ul className="hidden md:flex space-x-6 ml-0">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:underline">Sobre mí</a></li>
            <li><a href="#tecnologias" className="hover:underline">Tecnologías</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
          {/* Botón de menú para móviles */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Segunda Columna: Título centrado */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold">Mi Portafolio</h1>
        </div>

        {/* Tercera Columna: Correo alineado a la derecha */}
        <div className="flex-1 text-right">
          <a href="mailto:miemail@example.com" className="hover:underline">
            miemail@example.com
          </a>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="space-y-4 px-4 py-2">
            <li><a href="#inicio" className="block hover:underline">Inicio</a></li>
            <li><a href="#sobre-mi" className="block hover:underline">Sobre mí</a></li>
            <li><a href="#tecnologias" className="block hover:underline">Tecnologías</a></li>
            <li><a href="#proyectos" className="block hover:underline">Proyectos</a></li>
            <li><a href="#contacto" className="block hover:underline">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
