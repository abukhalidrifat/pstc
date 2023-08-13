import React from "react";
import styles from "./Product.module.css";
import ourprod9 from '@/../public/Home Page Images/Our_Pro_09.jpg'
import ourprod10 from '@/../public/Home Page Images/Our_Pro_10.jpg'
import ourprod11 from '@/../public/Home Page Images/Our_Pro_11.jpg'
import ourprod12 from '@/../public/Home Page Images/Our_Pro_12.jpg'
import ourprod13 from '@/../public/Home Page Images/Our_Pro_13.jpg'
import ourprod14 from '@/../public/Home Page Images/Our_Pro_14.jpg'
import ourprod15 from '@/../public/Home Page Images/Our_Pro_15.jpg'
import ourprod16 from '@/../public/Home Page Images/Our_Pro_16.jpg'
import Image from "next/image";

export default function Product() {
  const ourProducts = [
    {
      img: ourprod9,
      title: "Protection & Control Panel",
    },
    {
      img: ourprod10,
      title: "Motor, Pump & Drive System",
    },
    {
      img: ourprod11,
      title: "Renewable Energy Generation Products",
    },
    {
      img: ourprod12,
      title: "Construction Machinery",
    },
    {
      img: ourprod13,
      title: "Material Handling Equipment",
    },
    {
      img: ourprod14,
      title: "Construction Machinery",
    },
    {
      img: ourprod15,
      title: "Architect Finishing Materials",
    },
    {
      img: ourprod16,
      title: "Other Products",
    },
  ];
  return (
    <>
      <section className={styles.section}>
        <p className={styles.heading}>PRODUCTS</p>
        <p className={styles.paragraph}>
          As per customer requirement, we can supply any product of Chinese
          brand & world famous brand
        </p>
        <div className={styles.productsContainer}>
          {ourProducts.map((item) => (
            <div className={styles.product}>
              <Image src={item.img} className={styles.img}/>
              <p className={styles.title}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
