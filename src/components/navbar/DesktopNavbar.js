import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navList}>
            
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
          <li><Link href={"/principlecompany"}>Principal Company</Link></li>
          <li><Link href={"/newsandevents"}>News & Events</Link></li>
          <li>
            <Link href={"/businessprofile"}>Business Profile</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
