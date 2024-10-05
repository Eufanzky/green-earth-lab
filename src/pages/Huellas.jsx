// src/pages/Huellas.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/NavBar";
import Swiper from "../components/Swiper";


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

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center bg-[#3F7E44]">
        <div className="relative w-full lg:w-1/2">
          {/* Carousel Images */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-200"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition duration-200"
          >
            &#9654;
          </button>
        </div>


        <Swiper/>
      </div>
    </>
  );
};

export default Huellas;
