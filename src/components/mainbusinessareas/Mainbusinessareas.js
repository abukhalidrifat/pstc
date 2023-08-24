import React from "react";
import styles from "./Mainbusinessareas.module.css";
import mainarea1 from '@/../public/Home Page Images/Main_Area_01.jpg'
import mainarea2 from '@/../public/Home Page Images/Main_Area_02.jpg'
import mainarea3 from '@/../public/Home Page Images/Main_Area_03.jpg'
import mainarea4 from '@/../public/Home Page Images/Main_Area_04.jpg'
import mainarea5 from '@/../public/Home Page Images/Main_Area_05.jpg'
import Image from "next/image";

export default function Mainbusinessareas() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>MAIN AREAS OF BUSINESS</p>
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
        <div className={styles.images}>
            <Image src={mainarea1} className={styles.mainareaimg}/>
            <Image src={mainarea2} className={styles.mainareaimg}/>
            <Image src={mainarea3} className={styles.mainareaimg}/>
            <Image src={mainarea4} className={styles.mainareaimg}/>
            {/* <Image src={mainarea5} className={styles.mainareaimg}/> */}
        </div>
        <div className={styles.redbox}></div>
      </div>
    </>
  );
}
