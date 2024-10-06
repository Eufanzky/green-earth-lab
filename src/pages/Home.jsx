import React from 'react';
import myGif from '../assets/13odss.gif'; // Importa el GIF correctamente
import icon1 from '../assets/huella.png'; 
import icon2 from '../assets/foco.png'; 
import icon3 from '../assets/clima global.png'; 
import icon4 from '../assets/biodiversidad en peligro.png'; 
import icon5 from '../assets/lupa.png'; 
import icon6 from '../assets/reto green heart.png'; 
import Navbar from '../components/NavBar'; // Asegúrate de tener este componente

const Home = () => {
  const menuItems = [
    {
      title: 'Huellas del Pasado',
      icon: icon1,
      link: '/huellas',
      description: 'Descubre cómo el pasado ha marcado nuestro presente ambiental.'
    },
    {
      title: 'Soluciones Verdes',
      icon: icon2,
      link: '/soluciones',
      description: 'Explora soluciones sostenibles para un futuro más verde.'
    },
    {
      title: 'Clima Global',
      icon: icon3,
      link: '/clima',
      description: 'Conoce cómo los cambios climáticos afectan nuestro planeta.'
    },
    {
      title: 'Biodiversidad en Peligro',
      icon: icon4,
      link: '/biodiversidad',
      description: 'Aprende sobre las especies en peligro y cómo protegerlas.'
    },
    {
      title: 'Curiosidades Verdes',
      icon: icon5,
      link: '/curiosidades',
      description: 'Datos interesantes y divertidos sobre la naturaleza.'
    },
    {
      title: 'Reto GreenEarth',
      icon: icon6,
      link: '/retos',
      description: 'Participa en el reto y ayuda a proteger el medio ambiente.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#34cf6d] to-white">
      <Navbar />
      
      {/* Sección del título con el GIF */}
      <div className="flex flex-col items-center lg:mt-16 lg:mb-20 pt-5">
        <div className="flex flex-col lg:flex-row items-center mb-6 space-x-4"> 
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
              Conéctate con la Tierra:
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
              Aprende, Juega y Protege
            </h2>
          </div>
          <div>
            <img src={myGif} alt="sdg gif" className="w-28 h-28 lg:w-40 lg:h-40 ml-4" /> {/* GIF más grande */}
          </div>
        </div>
      </div>

      {/* Agrupación de botones en filas de 3 horizontalmente con menor espacio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center px-6 lg:px-10"> {/* Ajusta el gap a 2 */}
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-green-200 hover:text-white" // Box interactivo completo
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 mb-2 transition-colors duration-300" // El icono también más ajustado
            />
            <h3 className="text-lg font-semibold text-green-800 hover:text-black">{item.title}</h3>
            <p className="text-sm text-gray-600 hover:text-black text-center">{item.description}</p> {/* Descripción debajo del título */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;