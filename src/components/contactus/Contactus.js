import React from "react";
import styles from "./Contactus.module.css";
export default function Contactus() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>CONTACT US</p>
        <p className={styles.subtitle}>Registered Office</p>
        <p className={styles.paragraph}>
          House No: 294, Road No: 1, Baitul Aman Housing Society, Adabor,
          Dhaka-1207 | +88 02 8190183 | +88 02 8190183
        </p>
        <p className={styles.subtitle} style={{maxWidth:'1310px',margin:'auto'}}>
          Sales & Service Hotline (24*7) | +88 01723419748 |
          +8801872657170/+8801810079221 | sales@powersolutiontrading.com |
          powersolutionbd11@gmail.com
        </p>
        <p className={styles.subtitle} style={{marginTop:'60px'}}>Sales Office</p>
        <p className={styles.paragraph}>
          82, Nawabpur Road (2nd Floor), Hazrat Shahjalal Machinery Market,
          Nawabpur, Dhaka-1100
        </p>
        <p className={styles.subtitle}>Warehouse</p>
        <p className={styles.paragraph}>
          House # 19(Ground Floor), Road # Avenue-1, Block: B, Chandrima Model
          Town, Mohammadpur, Dhaka-1207
        </p>
      </div>
    </>
  );
}
