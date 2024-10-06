import React from 'react';
import myGif from '../assets/13odss.gif'; // Importa el GIF correctamente
import icon1 from '../assets/huella.png'; // Importa las imágenes localmente si están en assets
import icon2 from '../assets/foco.png'; // Cambia esto a la ruta correcta de tus imágenes
import icon3 from '../assets/clima global.png'; 
import icon4 from '../assets/biodiversidad en peligro.png'; 
import icon5 from '../assets/lupa.png'; 
import icon6 from '../assets/reto green heart.png'; 
import Navbar from '../components/NavBar'; // Asegúrate de tener este componente
import MenuCard from '../components/MenuCard';


const Home = () => {
  const menuItems1 = [
    { title: 'Huellas del Pasado', icon: icon1, link: '/huellas' },
    { title: 'Soluciones verdes', icon: icon2, link: '/soluciones' },
    { title: 'Clima Global', icon: icon3, link: '/clima' },
  ];

  const menuItems2 = [
    { title: 'Biodiversidad en Peligro', icon: icon4, link: '/biodiversidad' },
    { title: 'Curiosidades Verdes', icon: icon5, link: '/curiosidades' },
    { title: 'Reto GreenEarth', icon: icon6, link: '/retos' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#EDEFE6]"> {/* Utiliza min-h-screen para ajustarse al tamaño de la pantalla */}
      <Navbar />
      <div className="flex flex-col justify-center lg:mt-16 lg:mb-20 pt-5">
        <h1 className="text-3xl lg:text-4xl font-bold text-black m">Conéctate con la Tierra: 
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-black m">Aprende, Juega y Protege 
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 px-6 lg:px-10">
        
        {/* Primera Columna */}
        <div className="mb-5 order-2 lg:order-1 flex flex-col space-y-4 lg:w-1/3 gap-3">
          {menuItems1.map((item, index) => (
           <MenuCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

        {/* Imagen en el medio */}
        <div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0 lg:w-1/3">
  <img
    src={myGif}
    alt="sdg gif"
    className="w-full h-auto lg:w-96" // Cambia lg:w-64 a lg:w-96 para hacerlo más grande
  />
</div>


        {/* Segunda Columna */}
        <div className="order-3 lg:order-3 flex flex-col space-y-4 lg:w-1/3 gap-3">
          {menuItems2.map((item, index) => (
            <MenuCard key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
