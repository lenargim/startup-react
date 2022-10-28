import React from 'react';
import s from './Slider.module.sass'
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from './../../../assets/images/slider/slider1.png'
import slider2 from './../../../assets/images/slider/slider2.png'
import slider3 from './../../../assets/images/slider/slider3.png'

const Slider = () => {
  return (
    <Swiper
      className={s.slider}
      slidesPerView={'auto'}
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      navigation={{
        prevEl: '.navigation__prev',
        nextEl: '.navigation__next',
      }}
      speed={500}
      allowTouchMove={false}
      watchSlidesProgress={true}
    >
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider1} alt="slider name"/></div>
      </SwiperSlide>
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider2} alt="slider name"/></div>
      </SwiperSlide>
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider3} alt="slider name"/></div>
      </SwiperSlide>
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider1} alt="slider name"/></div>
      </SwiperSlide>
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider2} alt="slider name"/></div>
      </SwiperSlide>
      <SwiperSlide className={[s.slide].join(' ')}>
        <div className={[s.slideImg, 'img'].join(' ')}><img src={slider3} alt="slider name"/></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;