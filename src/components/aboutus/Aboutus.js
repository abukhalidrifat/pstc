import React from "react";
import styles from './Aboutus.module.css'
import Image from "next/image";
import organogram from '@/../public/Home Page Images/Organogram.png'
import Link from "next/link";

export default function Aboutus() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>ABOUT US</p>
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
        <p className={styles.organogram}>Organogram</p>
        <Image src={organogram} className={styles.img}/>
        <Link href={'aboutus'} className={styles.button}>Learn More</Link>
      </div>
    </>
  );
}
