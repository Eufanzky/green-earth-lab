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
import '../styles/Slider.css'; 

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
        <SwiperSlide key={index} className='p-1 rounded-lg"'>
          <div className='w-full px-36'>
          <img
            src={slide.image}
            alt={slide.description}
            className="w-full h-52 object-cover rounded-lg mb-10 border-black border-2"
          />
          <p className='mt-10 text-white font-bold text-lg mb-10'>{slide.description}</p>

          </div>
        </SwiperSlide>
      ))
    }
  </Swiper>
  );
};

export default Slider;
