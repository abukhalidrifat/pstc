'use client'

import React from "react";
import styles from "./Products.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import slugify from 'react-slugify'


export default function ProductCrad({title,img}) {
    const router = useRouter();
    const handleReddirect = (title) => {
        const slug = slugify(title)
        router.push(`/product/${slug}`);
      };
  return (
    <>
      <div
        className={styles.product}
        key={title}
        onClick={() => handleReddirect(title)}
      >
        <Image src={img} className={styles.img} />
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
}
