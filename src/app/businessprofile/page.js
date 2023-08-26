"use client";
import React, { useState } from "react";
import styles from "../customer/Customer.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function BusinessProfile() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>BUSINESS PROFILE</p>
        </div>
        <div className={styles.business}>
          <Image
            src={"/business-profile/1.jpg"}
            alt="image"
            width={1400}
            height={2000}
          />
          <Image
            src={"/business-profile/2.jpg"}
            alt="image"
            width={1400}
            height={2000}
          />
          <Image
            src={"/business-profile/3.jpg"}
            alt="image"
            width={1400}
            height={2000}
          />
          {show && (
            <>
              <Image
                src={"/business-profile/4.jpg"}
                alt="image"
                width={1400}
                height={2000}
              />
              <Image
                src={"/business-profile/5.jpg"}
                alt="image"
                width={1400}
                height={2000}
              />
            </>
          )}
          <button
            className={styles.button}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "hide" : "see more"}
          </button>
          <a href="/business_profile.pdf" className={styles.download} download>
            DOWNLOAD
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
