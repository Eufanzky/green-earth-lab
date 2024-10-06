// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from '../styles/Huellas.module.css';

const Curiosidades = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "../assets/react.svg", alt: "Image 1" },
    { src: "../assets/react.svg", alt: "Image 2" },
    { src: "../assets/react.svg", alt: "Image 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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

  return (
    <>
      <Navbar />
      <div className={`flex items-center justify-center py-10 px-10 ${styles.huellas_bg}`} >
        <div className="max-w-3xl flex justify-center items-center h-100 bg-[#3F7E44] rounded-md border-black border-2">
          <div className="py-10 w-full">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Curiosidades;
