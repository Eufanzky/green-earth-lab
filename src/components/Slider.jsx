// src/components/Swiper.jsx
import React from 'react';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = ({ slides }) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {
      slides.map((slide, index) => (
        <SwiperSlide key={index} className='shadow-md p-1 rounded-lg"'>
          <img
            src={slide.image}
            alt={slide.description}
            className="w-full h-56 object-cover rounded-lg mb-10"
          />
          <p className='mt-10 text-white font-bold text-lg'>{slide.description}</p>
        </SwiperSlide>
      ))
    }
  </Swiper>
  );
};

export default Slider;
