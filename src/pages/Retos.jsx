import React from 'react';

const Retos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 via-green-400 to-green-200 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Aprende cumpliendo retos
      </h1>
      <p className="text-lg md:text-xl text-white mb-12 max-w-2xl">
        Únete a nosotros para aprender sobre los Objetivos de Desarrollo Sostenible (ODS)
        y cómo puedes hacer una diferencia en el mundo. Explora nuestros retos y descubre
        nuevas maneras de contribuir a un futuro mejor.
      </p>
      
      <div className="space-y-4">
        <div className="flex space-x-4">
          <a
            href="https://puzzel.org/es/matching-pairs/play?p=-O8Td9WwJ5OSYDyFUy2p"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Adivina Quién Estuvo Aquí
          </a>
          <a
            href="https://puzzel.org/es/matching-pairs/play?p=-O8Td9WwJ5OSYDyFUy2p"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Verdad Climática
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Crucigrama
          </a>
        </div>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Rompecabezas climatico
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            Adivina el pasado
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white transition duration-300"
          >
            verdad o fire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Retos;

