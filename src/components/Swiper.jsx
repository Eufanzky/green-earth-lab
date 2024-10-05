// src/components/Swiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import necessary Swiper components
import { Navigation, Pagination } from 'swiper';

// Sample image data
const images = [
  { src: '../assets/react.svg', alt: 'Image 1' },
  { src: '../assets/react.svg', alt: 'Image 2' },
  { src: '../assets/react.svg', alt: 'Image 3' },
];

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Pagination]} // Include necessary modules
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
