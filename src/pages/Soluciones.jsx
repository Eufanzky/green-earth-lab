// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from '../styles/Huellas.module.css';

const Soluciones = () => {
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YJqtyfQZ1K-aMooIxOrehgJrQFfFyx-m6w&s ",
      description:
        "La utilización de fuentes de energía como solar, eólica, hidroeléctrica y geotérmica reduce la dependencia de combustibles fósiles y disminuye las emisiones de gases de efecto invernadero.",
    },
    {
      image:
        "https://adleragro.com/wp-content/uploads/2022/02/Sin-t%C3%ADtulo-1080-%C3%97-1920-px-Poster-horizontal-1.jpg ",
      description:
        "Técnicas como la agricultura orgánica, la permacultura y la agroecología promueven prácticas que conservan la biodiversidad, utilizan menos químicos y optimizan el uso del agua.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXF8rxUFrTV9b1utp3pLqakFY6dTuz7fVfQ&s ",
      description:
        "Fomentar el uso del transporte público, bicicletas y vehículos eléctricos ayuda a reducir la contaminación del aire y la congestión urbana.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabNtyNA-Rykx4U-aRdF-QjYlp0ghAkxlp8A&s ",
      description:
        "Edificios diseñados con materiales sostenibles, técnicas de eficiencia energética y sistemas de gestión del agua (como la recolección de agua de lluvia) minimizan el impacto ambiental.",
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

export default Soluciones;
