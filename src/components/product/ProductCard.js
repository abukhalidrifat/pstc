"use client";

import React from "react";
import styles from "./Products.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import slugify from "react-slugify";

export default function ProductCrad({
  title,
  img,
  isSubcategory,
  openModalImg,
  showOrderNow = false,
}) {
  const router = useRouter();
  const handleReddirect = (title) => {
    if (isSubcategory) {
      return;
    }
    const slug = slugify(title);
    router.push(`/product/${slug}`);
  };

  return (
    <>
      <div className={styles.product} key={title}>
        <Image
          src={img}
          alt="image"
          className={styles.cardImg}
          width={340}
          height={410}
          onClick={() => {
            handleReddirect(title);
            openModalImg(img);
          }}
        />
        <div className={styles.bottom}>
          <p
            className={styles.title}
            onClick={() => {
              handleReddirect(title);
              openModalImg(img);
            }}
          >
            {title}
          </p>
          {showOrderNow && (
            <button
              className={styles.button}
              onClick={() => router.push(`/product/order`)}
            >
              Order Now
            </button>
          )}
        </div>
      </div>
    </>
  );
}
