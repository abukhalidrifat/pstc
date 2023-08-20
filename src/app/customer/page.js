"use client";
import React from "react";
import styles from "./Customer.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Customer() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>OUR PRINCIPAL CUSTOMER</p>
        </div>
        <div className={styles.ourServices}>
          <ul>
            <li>
              Bangladesh Petroleum Exploration and Production Company Limited
              (BAPEX)
            </li>
            <li>Bangladesh Gas Fields Company Limited (BGFCL) </li>
            <li>B-R Powergen Ltd</li>
            <li>
              POSCO Engineering & Construction CO., Ltd.POSCO Engineering &
              Construction CO., Ltd.
            </li>
            <li>Shahjalal Fertilizer Company Limited (An Enterprise of BCIC</li>
            <li>Bangladesh Power Development Board (BPDB) </li>
            <li>
              Energyprima Limited, 50 MW Rental Power Plant at Kumargaon, Sylhet
            </li>
            <li>
              Energyprima Limited, 50 MW Rental Power Plant at Shahjibazar,
              Hobigonj
            </li>
            <li>
              Energyprima Limited, 50 MW Rental Power Plant at Fenchugonj,
              Sylhet
            </li>
            <li>Energyprima Limited, 20 MW Rental Power Plant at Bogra. </li>
            <li>HF Power Ltd, HF 113 MW Power Plant at Noakhali</li>
            <li>
              Desh Cambridge Kumargaon Power Company Limited, DCKPCL 10 MW Power
              Plant
            </li>
            <li>
              Desh Energy Limited 100 MW Rental Power Plant at Siddhirgonj,
              Narayangonj
            </li>
            <li>
              Venture Energy Resources Ltd., Bhola Rental Power Plant, Bhola.
            </li>
            <li>
              Sinha Peoples Energy Limited, 52.5 MW IPP at Katpatti, Narayanganj
            </li>
            <li>HA-MEEM Group</li>
            <li>Teletalk Bangladesh Ltd</li>
            <li>Energypac Engineering Ltd</li>
            <li>Adex Engineering Ltd</li>
            <li>Powermann Bangladesh Ltd</li>
            <li>MAM Power Ltd</li>
            <li>Reverie Power & Automation Engineering Ltd</li>
            <li>TOKAI Power Products Ltd</li>
            <li>AB Power Engineering Ltd</li>
            <li>Green Power Electrical & Electronics Ltd</li>
            <li>OrasInvest Bangladesh</li>
            <li>Mobiserve Bangladesh</li>
            <li>Zamil Infra Limited</li>
            <li>Tech-Pro Tele Engineering</li>
            <li>DNS Engineering & Communications Ltd</li>
          </ul>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/adex.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/bapex.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/ab.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/br.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/current.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/desh.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/gas.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <div>
              <Image
                src={"/principle/energy.png"}
                alt="principle"
                width={400}
                height={400}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
}
