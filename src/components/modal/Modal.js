import React from "react";
import styles from "./Modal.module.css";
import Image from "next/image";

export default function Modal({ image,closeModal }) {
  return (
    <>
      <div className={styles.modalContainer}>
      </div>
      <div className={styles.modalBody}>
          <button onClick={()=>closeModal()}>X</button>
        <div className={styles.modalImg}>
          <Image src={image} alt="image" width={1600} height={700} />
        </div>
        <div className={styles.modalParagraph}>
          <p>Product Name: </p>
          <p>Code: </p>
          <p>Description: </p>
          <p>Price: </p>
          <p>For order: 01*********</p>
        </div>
      </div>
    </>
  );
}
