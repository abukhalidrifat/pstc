import React from "react";
import styles from "../customer/Customer.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function PrincipleCompany() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>OUR PRINCIPAL COMPANY</p>
        </div>
        <div className={styles.principal}>
          <div>
            <h2>Our Principal Company:</h2>
            <p>
              Power Solution Trading Company is authorized Channel Partner /
              System Integrator of:
            </p>
            <p>Stucke Elektronik GmbH</p>
            <p>Merkurring 26 22143 Hamburg, Germany</p>
            <p>Phone: +49(0)40227468-0</p>
            <p>Fax: +49(0)40227468-20</p>
            <p>Email: mail@stuckegroup.de</p>
            <p>Web: www.stuckegroup.co</p>
          </div>
          <Image
            src={"/principlecompany.jpeg"}
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
