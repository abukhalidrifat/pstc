"use client";
import React from "react";
import styles from "../customer/Customer.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>OUR SERVICES</p>
        </div>
        <div className={styles.ourServices}>
          <ul>
            <li>
              Design, Supply, Construction, Installation, Commissioning,
              Testing, Start-up, Training & Maintenance of Natural Gas Generator
              based Power Plant, Diesel Generator Based Power Plant, HFO
              Generator Based Power Plant, Gas Turbine Based Power Plant, Steam
              Turbine Based Power Plant, Combined Cycle Power Plant & CHP Plant
            </li>
            <li>
              Design, Supply, Construction, Installation, Commissioning,
              Testing, Start-up, Training & Maintenance of Power Transmission &
              Distribution Substation (Up to 132 KV) & Power Transmission &
              Distribution Line (Up to 132 KV)
            </li>
            <li>
              Design, Supply, Construction, Installation, Commissioning,
              Testing, Startup, Training & Maintenance of Solar Power Plant,
              Wind Power Plant, Wind Solar Hybrid Power Plant &Solar Diesel
              Hybrid Power Plant • Design, Supply, Construction, Installation,
              Commissioning, Testing, Startup & Maintenance of Elevator System
              Project
            </li>
            <li>
              Design, Supply, Installation, Commissioning, Testing, Startup,
              Training & Maintenance of Process Control System, Power Plant
              Control System, Substation Automation System, Industrial
              Automation System, DCS System & SCADA System
            </li>
            <li>
              Design, Supply, Installation, Commissioning, Testing, Start up,
              Training & Maintenance of Telecommunication System Project,
              Security System Project & ICT Project • Design, Supply,
              Construction, Installation, Commissioning, Testing, Start up,
              Training & Maintenance of Industrial Production Plant.
            </li>
            <li>
              Retrofit, Upgrade and Rehabilitation of Industrial Process Control
              System, Power Plant Control System, Substation Automation System,
              DCS/S CADA System, Turbine Control System, Gas Generator/Diesel
              Generator/HFO Generator Control System, LV/MV/HV Switchgear, Motor
              Control Center, Cooling System, Governor & Outdated Electrical
              Equipment
            </li>
            <li>
              Design, Estimation, Preconstruction, Site Work, Rough Framing,
              Exterior Construction,MEP(Mechanical, Electrical& Plumbing) and
              Finishing of Construction Project(Residential & Commercial)
            </li>
          </ul>
        </div>
        <Image src={'/services.jpeg'} className={styles.img} width={400} height={500}/>
      </section>
      <Footer />
    </>
  );
}
