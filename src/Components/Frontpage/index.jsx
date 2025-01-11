import React, { useState, useEffect } from 'react';
import './Video.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Soy Diseñador web y Aplicaciones.";
  const typingSpeed = 100;  // Velocidad de escritura (en ms)
  const deletingSpeed = 50; // Velocidad de borrado (en ms)
  const delayBeforeDelete = 5000; // Tiempo de espera antes de borrar (5 segundos)
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingAction = () => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    };

    if (!isDeleting && index === fullText.length) {
      setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else {
      const timeout = setTimeout(typingAction, isDeleting ? deletingSpeed : typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, isDeleting]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/portada.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Hola</h1>
        <h2 className="text-2xl font-light">
          {text}
          <span className="blinking-cursor">|</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
