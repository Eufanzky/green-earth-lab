// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Slider from "../components/Slider";

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
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos. ",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos. ",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos. ",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos. ",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description:
        "El cambio climático es un fenómeno complejo que ha sido influenciado por factores naturales y humanos. ",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-24 px-10">
        <div className="flex justify-center items-center h-72 bg-[#3F7E44] ">
          <div className="w-80">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Huellas;
