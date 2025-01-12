import React from 'react';
import './Card.css';

const Carta = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-12"> {/* Ajusté el padding vertical */}
      <div className="flex max-w-4xl w-full bg-transparent p-6 rounded-lg shadow-none border-none">
        {/* Columna de la izquierda (Foto) */}
        <div className="w-1/2 pr-6 flex justify-center">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
            alt="Tu Foto"
            className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg" // Ajustamos el tamaño a 200px por 200px
          />
        </div>

        {/* Columna de la derecha (Texto) */}
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-white mb-4">¡Hola, soy [Tu Nombre]!</h2>
          <p className="text-lg text-white">
            Soy [Tu Profesión] y me dedico a [tu descripción]. Mi objetivo es ofrecer soluciones
            creativas y eficientes a través del diseño web y aplicaciones. Siempre buscando
            mejorar la experiencia de usuario y garantizar el mejor rendimiento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carta;
