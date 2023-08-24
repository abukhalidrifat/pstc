"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo2 from "@/../public/logo2.jpeg";
import logo3 from "@/../public/logo3.jpeg";
import logo4 from "@/../public/logo4.jpeg";

export default function MobileNavbar() {
  const [show, setShow] = useState(false);
  const navbar = (
    <>
      <div className={styles.mobileNav}>
        <ul className={styles.navList}>
          <li
            style={{
              alignSelf: "end",
              backgroundColor: "red",
              width: "30px",
              height: "30px",
              padding: "5px",
              paddingLeft: "9px",
              borderRadius: "20px",
            }}
            onClick={() => setShow(false)}
          >
            x
          </li>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/aboutus"}>About Us</Link>
          </li>
          <li>
            <Link href={"/product"}>Products</Link>
          </li>
          <li>
            <Link href={"/vendor"}>Vendors</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/customer"}>Customers</Link>
          </li>
          <li>
            <Link href={"/principlecompany"}>Principal Company</Link>
          </li>
          <li>
            <Link href={"/newsandevents"}>News & Events</Link>
          </li>
          <li>
            <Link href={"/businessprofile"}>Business Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      {show && navbar}
      <div className={styles.mobileContainer}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="32"
            viewBox="0 0 24 24"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(true)}
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
          </div>
        <div className={styles.logoDiv}>
          <Image
            src={logo2}
            className={styles.logo}
            style={{ marginLeft: "15px" }}
          />
          <Image src={logo3} className={styles.logo} />
          <Image src={logo4} className={styles.logo} />
        </div>
      </div>
    </>
  );
}
