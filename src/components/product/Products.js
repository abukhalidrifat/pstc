import React from "react";
import styles from "./Products.module.css";
import ourprod1 from "@/../public/Home Page Images/Our_Pro_01.jpg";
import ourprod2 from "@/../public/Home Page Images/Our_Pro_02.jpg";
import ourprod3 from "@/../public/Home Page Images/Our_Pro_03.jpg";
import ourprod4 from "@/../public/Home Page Images/Our_Pro_04.png";
import ourprod5 from "@/../public/Home Page Images/Our_Pro_05.jpg";
import ourprod6 from "@/../public/Home Page Images/Our_Pro_06.jpg";
import ourprod7 from "@/../public/Home Page Images/Our_Pro_07.jpg";
import ourprod8 from "@/../public/Home Page Images/Our_Pro_08.jpg";
import ourprod9 from "@/../public/Home Page Images/Our_Pro_09.jpg";
import ourprod10 from "@/../public/Home Page Images/Our_Pro_10.jpg";
import ourprod11 from "@/../public/Home Page Images/Our_Pro_11.jpg";
import ourprod12 from "@/../public/Home Page Images/Our_Pro_12.jpg";
import ourprod13 from "@/../public/Home Page Images/Our_Pro_13.jpg";
import ourprod14 from "@/../public/Home Page Images/Our_Pro_14.jpg";
import ourprod15 from "@/../public/Home Page Images/Our_Pro_15.jpg";
import ourprod16 from "@/../public/Home Page Images/Our_Pro_16.jpg";
import ProductCrad from "./ProductCard";
import Image from "next/image";

export default function Products() {
  const ourProducts = [
    {
      img: ourprod1,
      title: "Power Generation System",
    },
    {
      img: ourprod2,
      title: "Power Transmission & Distribution Substation System",
    },
    {
      img: ourprod3,
      title: "Industrial Power System Products & Telecom Power System",
    },
    {
      img: ourprod4,
      title: "Industrial Automation Products",
    },
    {
      img: ourprod5,
      title: "Security System Products",
    },
    {
      img: ourprod6,
      title: "Telecommunication System",
    },
    {
      img: ourprod7,
      title: "Metering System",
    },
    {
      img: ourprod8,
      title: "Elevator System",
    },
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
        {/* <p className={styles.heading}>PRODUCTS</p>
        <p className={styles.paragraph}>
          As per customer requirement, we can supply any product of Chinese
          brand & world famous brand
        </p> */}
        <div className={styles.productsContainer}>
          {ourProducts.map((item) => (
            <ProductCrad title={item.title} img={item.img} />
          ))}
        </div>
      </section>
    </>
  );
}
