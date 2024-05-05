import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../../../img/75huylFjILwQmN7lrs89 1.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
