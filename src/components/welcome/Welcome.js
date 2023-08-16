"use client";
import React from "react";
import styles from "./Welcome.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import slider1 from "@/../public/Home Page Images/Slider_01.jpg";
import slider2 from "@/../public/Home Page Images/Slider_02.jpg";
import slider3 from "@/../public/Home Page Images/Slider_03.jpg";
import slider4 from "@/../public/Home Page Images/Slider_04.jpg";
import slider5 from "@/../public/Home Page Images/Slider_05.jpg";
import slider6 from "@/../public/Home Page Images/Slider_06.jpg";

export default function Welcome() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.leftContainer}>
          <p className={styles.heading}>WELCOME TO</p>
          <p className={styles.paragraph}>Power Solution</p>
          <p className={styles.paragraph}>Trading Company</p>
        </div>
        <div className={styles.rightContainer}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
            }}
            effect="fade"
          >
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider1} alt="image" />
            </SwiperSlide>
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider2} alt="image" />
            </SwiperSlide>
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider3} alt="image" />
            </SwiperSlide>
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider4} alt="image" />
            </SwiperSlide>
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider5} alt="image" />
            </SwiperSlide>
            <SwiperSlide className={styles.sliderImg}>
              <Image src={slider6} alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
