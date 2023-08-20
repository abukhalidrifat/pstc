import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
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
          <li>Services</li>
          <li>Projects</li>
          <li>
            <Link href={"/customer"}>Customers</Link>
          </li>
          <li>Principal Company</li>
          <li>News and events</li>
          <li>
            <a
              href="/business_profile.pdf"
              className={styles.subtitle}
              download
            >
              Business Profile
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
