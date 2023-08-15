"use client";

import React from "react";
import { ourProducts } from "@/utils/ourProducts";
import Topbar from "@/components/topbar/Topbar";
import Footer from "@/components/footer/footer";
import styles from "../Product.module.css";
import ProductCrad from "@/components/product/ProductCard";

export default function SubProduct({ params }) {
  // const filtered = ourProducts.filter((post) => {
  //   return post.title === params.slug;
  // });

  // console.log({ ...filtered });

  console.log();

  return (
    <>
      <Topbar />
      <section>
        <div className={styles.title}>
          <p>{params.slug.split("-").join(" ").toUpperCase()}</p>
        </div>
        <ProductCrad />
      </section>
      <Footer />
    </>
  );
}
