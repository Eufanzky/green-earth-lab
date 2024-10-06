// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import styles from '../styles/Huellas.module.css';

const Huellas = () => {
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
        "https://images.pexels.com/photos/4338092/pexels-photo-4338092.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        " El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos.",
    },
    {
      image:
        "https://images.pexels.com/photos/682078/pexels-photo-682078.jpeg?auto=compress&cs=tinysrgb&w=800 ",
      description:
        "Antes de la Revolución Industrial, las variaciones climáticas eran naturales, pero desde el siglo XVIII, el uso de combustibles fósiles ha aumentado significativamente los gases de efecto invernadero.",
    },
    {
      image:
        "https://images.pexels.com/photos/26200752/pexels-photo-26200752/free-photo-of-nubes-calle-edificio-fabrica.jpeg?auto=compress&cs=tinysrgb&w=800 ",
      description:
        "En el siglo XX, las investigaciones alertaron sobre el aumento de dióxido de carbono y metano.",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThNgF67X7D7WoJTcDt31DKegc0hkId2vbePm4RqMqUXEyGA-KP ",
      description:
        "En 1956, Charles David Keeling comenzó a monitorear CO2 en Mauna Loa, evidenciando el impacto humano en el clima.",
    },
    {
      image:
        "https://images.pexels.com/photos/14501973/pexels-photo-14501973.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "En las décadas de 1980 y 1990, se consolidó el consenso científico sobre el cambio climático y se creó el IPCC (Órgano Científico) en 1988, publicando informes sobre la urgencia de abordar este problema global.",
    },
    {
      image:
        "https://images.pexels.com/photos/5111062/pexels-photo-5111062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "En el siglo XXI, el cambio climático es una preocupación global, con efectos como el aumento de temperaturas, el derretimiento de glaciares y el aumento del nivel del mar.",
    },
    {
      image:
        "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Se han establecido acuerdos internacionales como el Protocolo de Kioto en 1997 y el Acuerdo de París en 2015 para reducir las emisiones.",
    },
    {
      image:
        "https://images.pexels.com/photos/9034099/pexels-photo-9034099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A pesar de estos esfuerzos, la implementación de políticas efectivas sigue siendo un desafío y la necesidad de acciones sostenibles es urgente.",
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

export default Huellas;
