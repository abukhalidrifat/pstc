import React from "react";
import styles from "./Products.module.css";
import ProductCrad from "./ProductCard";
import { ourProducts } from "@/utils/MainCategory";

export default function Products() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.productsContainer}>
          {ourProducts.map((item) => (
            <ProductCrad title={item.title} img={item.img} isSubcategory={false}/>
          ))}
        </div>
      </section>
    </>
  );
}
