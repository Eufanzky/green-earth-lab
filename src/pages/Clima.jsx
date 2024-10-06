// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from "../styles/Huellas.module.css";
import stylesGlass from "../styles/Glass.module.css"; // Importa el archivo CSS correctamente
import PresentationTemplate from "../components/PresentationTemplate";
import AIQuizzCreator from "../components/AIQuizzCreator";

const Clima = () => {

  const slides = [
    {
      image:
        "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2024/07/2-valle-bravo-after.png?w=1280&h=852",
      description:
        " México enfrenta una severa sequía desde el verano de 2023, afectando a varios estados y reduciendo drásticamente los niveles de agua en embalses clave. El sistema Cutzamala, que abastece a Ciudad de México, opera solo al 25% de su capacidad. La falta de lluvias y el calor han agotado embalses y acuíferos",
    },
    {
      image:
        "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2024/06/3-bolivian-salt-flats-spanish.png?w=1280&format=webp",
      description:
        "El desierto de Atacama en Chile es extremadamente árido por la sombra orográfica de los Andes, que bloquea la humedad. En sus salinas, como el Salar de Uyuni, se encuentran minerales valiosos como litio, potasio y magnesio.",
    },
    {
      image:
        "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2024/06/2-bolivian-salt-flats-labels.png?w=1280&format=webp ",
      description:
        "Un astronauta de la Estación Espacial Internacional capturó una imagen de los Salar de Coipasa y Uyuni en Bolivia, que son cruciales para estudios climáticos y espaciales. Estas salinas revelan la historia climática de la Tierra y actúan como laboratorios naturales para investigar procesos similares en Marte.",
    },
    {
      image:
        "https://ciencia.nasa.gov/wp-content/uploads/sites/2/2024/06/1-the-mouse-souris-river-flooding-the-city-of-width-1024.jpg?w=1280&format=webp",
      description:
        "El satélite SWOT está mejorando las predicciones de inundaciones al medir en 3D la altura, anchura y pendiente de superficies acuáticas a nivel global, incluyendo ríos pequeños. Científicos, como J. Toby Minear, integran estos datos en modelos de inundaciones para aumentar la precisión y el alcance de las proyecciones.",
    },

  ];

  const title = "Explora las Huellas del Cambio Climático";
  const description = " "

  const data = {
    title,
    description,
    slides
  }

  return (
    <>
      <Navbar />
      <PresentationTemplate title={title} description={description} slides={slides} />
      <AIQuizzCreator data={data}/>
    </>
  );
};

export default Clima;
