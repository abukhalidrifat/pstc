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
          spaceBetween={50}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
        >
          {ourProducts.map((item) => (
            <SwiperSlide>
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
