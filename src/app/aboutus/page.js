import React from "react";
import styles from "./Aboutus.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import organogram from "@/../public/Home Page Images/Organogram.png";
import Image from "next/image";
import Contactus from "@/components/contactus/Contactus";

export default function AboutUs() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <p className={styles.title}>Introduction</p>
        <p className={styles.paragraph}>
          Power Solution Trading Company is a solid, single-source prime
          contractor, providing all mechanical, electrical, automation and
          control and civil disciplines to the power plant industry, power
          substation industry, power transmission and distribution line
          industry, telecommunication industry and industrial production plant
          industry. When it comes to turnkey services on new projects,
          renovations, retrofit, operation & maintenance and outages, Power
          Solution Trading Company can function in virtually any role including
          Engineering Procurement Construction (EPC), General Contractor (GC),
          Design & Build (DB) Contractor, Construction Manager (CM), Procurement
          Contractor (PC), Commissioning and Testing Contractor (CT),
          Major/Critical Mechanical Contractor/Erector and Operation &
          Maintenance Contractor (O&M). Whatever your project requirements and
          standards, you can count on the professional capabilities, Proven
          performance and trusted reliability of Power Solution Trading Company.
        </p>
        <p className={styles.title}>Our Vision</p>
        <p className={styles.paragraph}>
          To be leading Engineering Procurement, Construction & Maintenance
          (EPCM) Contractor for Power Generation Industry, Power Substation
          Industry, Power Transmission & Distribution Line Industry,
          Telecommunication Industry and Heavy Industrial Production Plant
          Industry in Bangladesh.
        </p>
        <p className={styles.title}>Our Mission</p>
        <p className={styles.paragraph}>
          To safely deliver complex projects on time for the most discriminating
          customers while consistently exceeding all their expectations.
        </p>
        <p className={styles.title}>Organogram</p>
        <Image src={organogram} className={styles.img} />
        <p className={styles.title}>Main areas of business</p>
        <div className={styles.items}>
          <ul>
            <li>
              Power Generation Sector • Power Transmission & Distribution
              Substation Sector
            </li>
            <li>
              Overhead Transmission & Distribution Line Sector •
              Telecommunication Sector
            </li>
            <li>
              Renewable Energy Generation Sector • Oil & Gas Production Sector
            </li>
            <li>Oil & Gas Exploration Sector • Industrial Automation Sector</li>
            <li>Manufacturing Industries • Pharmaceutical Factory</li>
            <li>Cement Factory • Glass Production Factory</li>
            <li>Textile and Spinning Mill • Garment Factory</li>
            <li>Steel Mill • Water Treatment Plant </li>
            <li>Beverage Plant</li>
            <li>Industrial Production Plant</li>
          </ul>
        </div>
        <Contactus/>
      </section>
      <Footer />
    </>
  );
}
