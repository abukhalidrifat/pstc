import React from "react";
import Topbar from "@/components/topbar/Topbar";
import styles from "./Product.module.css";
import Products from "@/components/product/Products";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export default function Product() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className={styles.title}>
        <p>OUR PRODUCTS</p>
      </div>
      <section>
        <Products />
      </section>
      <Footer />
    </>
  );
}
