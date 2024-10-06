import React from 'react';
import Navbar from "../components/NavBar";

export const Recursos = () => {

  const recursos = [
    {
      categoria: "Introducción a los ODS",
      titulo: "Objetivos de Desarrollo Sostenible (UN)",
      descripcion: "Explora los 17 objetivos y su impacto global.",
      enlace: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
    },
    {
      categoria: "Datos rápidos y estadísticas",
      titulo: "Fast Facts ODS 2023",
      descripcion: "Datos actualizados sobre los progresos y desafíos de los ODS.",
      enlace: "https://www.un.org/sustainabledevelopment/es/2023/08/fast-facts/"
    },
    {
      categoria: "Guías y Documentos Oficiales",
      titulo: "Guía ODS 2019",
      descripcion: "Documentación oficial para la implementación de los ODS.",
      enlace: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Guidelines_AUG_2019_Final.pdf"
    },
    {
      categoria: "Recursos Gráficos",
      titulo: "Descarga el logo oficial de los ODS",
      descripcion: "Paquete de logos oficiales de los ODS y la rueda de colores.",
      enlace: "https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S-SDG-logos-UN-emblem-SDG-wheel.zip"
    },
    {
      categoria: "Eventos y Desafíos Globales",
      titulo: "NASA Space Apps Challenge",
      descripcion: "Únete a los desafíos globales relacionados con la ciencia y la sostenibilidad.",
      enlace: "https://www.spaceappschallenge.org/"
    },
    {
      categoria: "Observación de la Tierra",
      titulo: "EO4SDG",
      descripcion: "Promoción del uso de la observación de la Tierra para apoyar los ODS.",
      enlace: "https://eo4sdg.org/"
    }
  ];

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-200 py-10 px-5">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-800">Recursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recursos.map((recurso, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:bg-green-100"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{recurso.titulo}</h2>
            <p className="text-gray-600 mb-4">{recurso.descripcion}</p>
            <a
              href={recurso.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:text-green-800 transition-colors"
            >
              Ver más
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
