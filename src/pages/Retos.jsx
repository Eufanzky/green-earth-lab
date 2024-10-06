import React from 'react';
import Navbar from "../components/NavBar";

const Retos = () => {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 flex flex-col items-center justify-center text-center space-y-6">
      
      <h1 className="text-7xl font-bold text-white mb-8 drop-shadow-lg animate-bounce">
        ¡Aprende jugando!
      </h1>
      <p className="text-3xl text-white mb-10 max-w-3xl font-light italic">
        Únete a nosotros y descubre cómo los Objetivos de Desarrollo Sostenible (ODS) pueden cambiar el mundo.
        ¡Acepta los retos y ayuda a construir un futuro mejor mientras te diviertes!
      </p>
      
      <div className="space-y-10">
        <div className="flex space-x-8 justify-center">
          <a
            href="https://puzzel.org/es/matching-pairs/play?p=-O8Td9WwJ5OSYDyFUy2p"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            🔍 Adivina Quién Estuvo Aquí
          </a>
          <a
            href="https://puzzel.org/es/quiz/play?p=-O8TuuLI2PQUKbDNbBnX"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            🌍 Verdad Climática
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            ✏️ Crucigrama
          </a>
        </div>
        <div className="flex space-x-8 justify-center">
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            🧩 Rompecabezas Climático
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            ⏳ Adivina el pasado
          </a>
          <a
            href="https://puzzel.org/es/crossword/play?p=-O8THX1M8Gf_ZmSs-A6l"
            className="border-2 border-black text-black bg-transparent px-8 py-6 rounded-full text-2xl font-semibold shadow-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition duration-300 ease-in-out"
          >
            🔥 Verdad o Fire
          </a>
        </div>
      </div>
    </div>

    </>

  );
};

export default Retos;
