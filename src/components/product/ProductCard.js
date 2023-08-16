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
      <div
        className={styles.product}
        key={title}
        onClick={() => {
          handleReddirect(title);
          openModalImg(img);
        }}
      >
        <Image
          src={img}
          alt="image"
          className={styles.img}
          width={340}
          height={410}
        />
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
}
