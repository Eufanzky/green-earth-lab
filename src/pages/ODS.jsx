// src/components/Ods.jsx
import React from 'react';
import Navbar from '../components/NavBar';

// Aquí agregas las URLs de las imágenes correspondientes a cada ODS.
const objectives = [
  { id: 1, title: 'Fin de la Pobreza', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-01.jpg', link: 'https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/' },
  { id: 2, title: 'Hambre Cero', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-02.jpg', link: 'https://www.un.org/sustainabledevelopment/es/hunger/' },
  { id: 3, title: 'Salud y Bienestar', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-03.jpg', link: 'https://www.un.org/sustainabledevelopment/es/health/' },
  { id: 4, title: 'Educación de Calidad', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-04.jpg', link: 'https://www.un.org/sustainabledevelopment/es/education/' },
  { id: 5, title: 'Igualdad de Género', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-05.jpg', link: 'https://www.un.org/sustainabledevelopment/es/gender-equality/' },
  { id: 6, title: 'Agua Limpia y Saneamiento', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-06.jpg', link: 'https://www.un.org/sustainabledevelopment/es/water-and-sanitation/' },
  { id: 7, title: 'Energía Asequible y No Contaminante', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-07.jpg', link: 'https://www.un.org/sustainabledevelopment/es/energy/' },
  { id: 8, title: 'Trabajo Decente y Crecimiento Económico', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-08.jpg', link: 'https://www.un.org/sustainabledevelopment/es/economic-growth/' },
  { id: 9, title: 'Industria, Innovación e Infraestructura', imageUrl: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-09.jpg', link: 'https://www.un.org/sustainabledevelopment/es/industry/' },
  { id: 10, title: 'Reducción de las Desigualdades', imageUrl: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-10-1-400x400.jpg', link: 'https://www.un.org/sustainabledevelopment/es/reduced-inequalities/' },
  { id: 11, title: 'Ciudades y Comunidades Sostenibles', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-11.jpg', link: 'https://www.un.org/sustainabledevelopment/es/sustainable-cities/' },
  { id: 12, title: 'Producción y Consumo Responsables', imageUrl: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-12.jpg', link: 'https://www.un.org/sustainabledevelopment/es/responsible-consumption/' },
  { id: 13, title: 'Acción por el Clima', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-13.jpg', link: 'https://www.un.org/sustainabledevelopment/es/climate-change/' },
  { id: 14, title: 'Vida Submarina', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-14.jpg', link: 'https://www.un.org/sustainabledevelopment/es/oceans/' },
  { id: 15, title: 'Vida de Ecosistemas Terrestres', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-15.jpg', link: 'https://www.un.org/sustainabledevelopment/es/biodiversity/' },
  { id: 16, title: 'Paz, Justicia e Instituciones Sólidas', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-16.jpg', link: 'https://www.un.org/sustainabledevelopment/es/peace-justice/' },
  { id: 17, title: 'Alianzas para Lograr los Objetivos', imageUrl: 'http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-17.jpg', link: 'https://www.un.org/sustainabledevelopment/es/global-partnerships/' },
];

const Ods = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Objetivos de Desarrollo Sostenible</h1>
      <p className="text-center text-lg text-gray-700 mb-6">
  Los Objetivos de Desarrollo Sostenible (ODS) son un llamado universal para poner fin a la pobreza, proteger el planeta y garantizar la paz y la prosperidad para todos. Adoptados por todos los Estados miembros de las Naciones Unidas en 2015, estos 17 objetivos proporcionan un marco para abordar los desafíos globales y lograr un futuro sostenible.
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {objectives.map((objective) => (
          <a
            key={objective.id}
            href={objective.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img src={objective.imageUrl} alt={objective.title} className="w-24 h-24 object-contain" />
            <h2 className="mt-4 text-xl font-semibold">{objective.title}</h2>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default Ods;
