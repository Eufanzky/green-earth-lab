import React from 'react';

const Retos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Aprende cumpliendo retos
      </h1>
      <p className="text-lg md:text-xl text-white mb-12 max-w-2xl">
        Únete a nosotros para aprender sobre los Objetivos de Desarrollo Sostenible (ODS)
        y cómo puedes hacer una diferencia en el mundo. Explora nuestros retos y descubre
        nuevas maneras de contribuir a un futuro mejor.
      </p>
      
      <div className="flex space-x-4">
        <a
          href="https://example.com/reto1"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
        >
          Reto 1
        </a>
        <a
          href="https://example.com/reto2"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
        >
          Reto 2
        </a>
        <a
          href="https://example.com/reto3"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
        >
          Reto 3
        </a>
      </div>
    </div>
  );
};

export default Retos;
