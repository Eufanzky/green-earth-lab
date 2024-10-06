// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from '../styles/Huellas.module.css';
import PresentationTemplate from "../components/PresentationTemplate";
import AIQuizzCreator from "../components/AIQuizzCreator";


const Curiosidades = () => {

  const slides = [
    {
        image:
          "https://media.istockphoto.com/id/1226721220/es/foto/ni%C3%B1o-abrazando-%C3%A1rbol-con-forma-de-coraz%C3%B3n-en-%C3%A9l.jpg?s=612x612&w=0&k=20&c=k4HTrTNJlEeiwWyEmVNm2NGfRI6Dja1pP-yojpso1P8= ",
        description:
          "Salvar la naturaleza es más barato: Conservar los ecosistemas suele ser más rentable que las intervenciones hechas por el hombre. En las Maldivas, la construcción de un muro marino para la protección costera costó alrededor de US $ 2.200 millones. Incluso después de 10 años en costos de mantenimiento, es cuatro veces más barato preservar el arrecife natural.",
      },
      {
        image:
          "https://www.lanacion.com.ar/resizer/v2/el-2020-fue-el-sexto-de-una-serie-de-anos-YWGSIQ4SE5AAFFNJRALUM6SLCU.png?auth=de04f39f795ba4648b1b32ef690f17c97f4ca9c330795b32eb25416ac140c7e4&width=420&height=280&quality=70&smart=true",
        description:
          "016 fue el año más cálido registrado: Los datos de la NASA y  Administración Nacional Oceánica y Atmosférica  (NOAA) muestran que los promedios globales en 2016 fueron 0.99 grados Cº más cálidos que el promedio de mediados del siglo XX. Diecisiete de los 18 años más cálidos de la historia han ocurrido desde el año 2000.",
      },
  ];

  const title = "La Urgencia de Proteger Nuestro Planeta: Costos y Realidades del Cambio Climático";
  const description = "En un mundo cada vez más afectado por el cambio climático, la necesidad de preservar nuestros ecosistemas se vuelve crítica. La conservación de la naturaleza no solo es una cuestión de ética ambiental, sino también una decisión económica inteligente. Por ejemplo, mientras que construir infraestructuras costosas para proteger las costas, como muros marinos, puede alcanzar cifras astronómicas, conservar arrecifes naturales es significativamente más barato y sostenible. Además, 2016 marcó un hito como el año más cálido registrado, lo que nos recuerda la urgencia de actuar frente a las crecientes temperaturas y sus efectos devastadores. Es momento de reflexionar sobre nuestras acciones y tomar decisiones que prioricen la salud de nuestro planeta para las generaciones futuras."

  const data = {
    title,
    description,
    slides
  }


  return (
    <>
      <Navbar />
      <PresentationTemplate title={title} description={description} slides={slides}/>
      <AIQuizzCreator data={data}/>
    </>
  );
};

export default Curiosidades;
