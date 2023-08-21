import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Topbar from "@/components/topbar/Topbar";
import React from "react";
import styles from "./Order.module.css";

export default function Order() {
  return (
    <>
      <Topbar />
      <Navbar />
        <div className={styles.title}>
          <p>ORDER NOW</p>
        </div>
      <section className={styles.form}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="address" placeholder="Address" />
        <input type="number" name="phone number" placeholder="01********" />
        <button>Order</button>
      </section>
      <Footer />
    </>
  );
}
