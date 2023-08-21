"use client";

import React, { useEffect, useState } from "react";
import ourProducts from "@/utils/ourProducts";
import Topbar from "@/components/topbar/Topbar";
import Footer from "@/components/footer/footer";
import styles from "../Product.module.css";
import ProductCrad from "@/components/product/ProductCard";
import slugify from "react-slugify";
import Navbar from "@/components/navbar/navbar";
import Modal from "@/components/modal/Modal";

export default function SubProduct({ params }) {
  const filtered = ourProducts.filter((post) => {
    return slugify(post.title) === params.slug;
  });

  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleOpenModal = (img) => {
    setModal(true);
    setModalImg(img);
  };

  return (
    <>
      {modal && <Modal image={modalImg} closeModal={() => setModal(false)} />}
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>{filtered[0].title}</p>
        </div>
        <div
          className={styles.container}
          style={
            filtered[0].isSubTitled
              ? { padding: "0 0", paddingBottom: "80px" }
              : { padding: "140px 0" }
          }
        >
          {!filtered[0].isSubTitled
            ? filtered[0].sub.map((item) => (
                <ProductCrad
                  key={item.name}
                  title={item.name}
                  img={`/${slugify(filtered[0].title)}/${slugify(
                    item.name
                  )}.jpg`}
                  isSubcategory={true}
                  openModalImg={handleOpenModal}
                  showOrderNow={true}
                />
              ))
            : filtered[0].sub.map((items) => (
                <>
                  <div className={[styles.title, styles.subCatTitle].join(" ")}>
                    <p>{items.subTitle}</p>
                  </div>
                  {items.subOfSub.map((item) => (
                    <ProductCrad
                      title={item.name}
                      img={`/${slugify(filtered[0].title)}/${slugify(
                        items.subTitle
                      )}/${slugify(item.name)}.jpg`}
                      isSubcategory={true}
                      openModalImg={handleOpenModal}
                      showOrderNow={true}
                    />
                  ))}
                </>
              ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
