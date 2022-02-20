import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import trunfoThumb from '../images/trunfo-project.png';
import ProjectSwiper from './ProjectSwiper';

function ProjetsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className='h-fit bg-white'
      slidesPerView={1}
			spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><ProjectSwiper text='Super Trunfo' thumb={trunfoThumb} /></SwiperSlide>
      <SwiperSlide><ProjectSwiper text='Super Trunfo' thumb={trunfoThumb} /></SwiperSlide>
      <SwiperSlide><ProjectSwiper text='Super Trunfo' thumb={trunfoThumb} /></SwiperSlide>
    </Swiper>
  );
}

export default ProjetsCarousel;
