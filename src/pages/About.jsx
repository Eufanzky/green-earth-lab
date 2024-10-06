// src/pages/About.jsx
import i1 from "../assets/inno.jpg";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h1 className="text-5xl font-bold mb-6 shadow-lg">Sobre Nosotros</h1>
        <p className="text-xl mb-4">¡Bienvenidos a Innovadores Cósmicos!</p>
        <p className="text-center max-w-2xl mb-6 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Somos un grupo apasionado por la creatividad y la tecnología,
          dedicados a explorar nuevas fronteras y desarrollar ideas innovadoras
          que transformen el mundo. Nuestro objetivo es impulsar proyectos que
          inspiren y conecten a las personas a través de la ciencia y la
          imaginación.
        </p>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Creemos que el futuro está lleno de posibilidades infinitas y estamos
          aquí para hacerlas realidad. ¡Únete a nosotros en este viaje hacia lo
          desconocido!
        </p>
        <h2 className="text-3xl font-semibold mt-8">
          Educar, Actuar, Transformar
        </h2>
        <div class="max-w-sm mx-auto">
          <img
            src={i1}
            alt="Descripción de la imagen"
            class="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <h2 className="text-3xl font-semibold mt-8">Nosotros Somos</h2>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Melani Carol Padilla Olivares
        </p>
        <b></b>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Laura Mabel Flores Apaza
        </p>
        <b></b>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Eugenio Francisco Condori Rojas
        </p>
        <b></b>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Paola Gema Mamani Janco
        </p>
        <b></b>
        <p className="text-center max-w-2xl mb-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          Eleazar David Condori Huanquiri
        </p>
      </div>
    </>
  );
};

export default About;
