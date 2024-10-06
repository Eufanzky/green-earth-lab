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
      <div className="flex flex-col items-center lg:mt-16 lg:mb-20 pt-5">
        <div className="flex items-center mb-4"> 
          <h1 className="text-3xl lg:text-4xl font-bold text-black">Conéctate con la Tierra: /n</h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-black">Aprende, Juega y Protege</h2>
        </div>
        <img src={myGif} alt="sdg gif" className="w-16 h-16 ml-4" /> {/* GIF al lado del título */}
      </div>

      {/* Agrupación de botones en filas de 3 horizontalmente */}
      <div className="grid grid-cols-3 gap-4 justify-center px-6 lg:px-10">
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-green-300 hover:text-white" // Todo el div es clicable
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-3 transition-colors duration-300" // El icono también cambia de color con el box
            />
            <h3 className="text-xl font-semibold text-green-800 hover:text-white">{item.title}</h3>
            <p className="text-sm text-gray-600 hover:text-white">{item.description}</p> {/* Descripción debajo del título */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
