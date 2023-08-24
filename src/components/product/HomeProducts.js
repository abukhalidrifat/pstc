"use client";

import React from "react";
import styles from "./Products.module.css";
import ProductCrad from "./ProductCard";
import { ourProducts } from "@/utils/MainCategory";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function HomeProducts() {
  return (
    <>
      <section className={styles.homeSection}>
        <p className={styles.heading}>PRODUCTS</p>

        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          centeredSlides={false}
          centerInsufficientSlides={true}
          breakpoints={{
            // when window width is >= 730px
            730: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {ourProducts.map((item) => (
            <SwiperSlide className={styles.MySwiperSlide}>
              <ProductCrad
                title={item.title}
                img={item.img}
                isSubcategory={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
