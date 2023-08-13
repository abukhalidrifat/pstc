import React from "react";
import styles from "./Services.module.css";
import ser1 from '@/../public/Home Page Images/Ser_01.jpg'
import ser2 from '@/../public/Home Page Images/Ser_02.jpg'
import Image from "next/image";

export default function Services() {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.title}>
          <Image src={ser1} className={styles.img}/>
          <p>Our Services</p>
          <Image src={ser2} className={styles.img}/>
        </div>
        <div className={styles.ourServices}>
          <ul>
            <li>
              Design, Supply, Construction, Installation, Commissioning,
              Testing, Start-up, Training & Maintenance of Natural Gas Generator
              based Power Plant, Diesel Generator Based Power Plant, HFO
              Generator Based Power Plant, Gas Turbine Based Power Plant, Steam
              Turbine Based Power Plant, Combined Cycle Power Plant & CHP Plant.
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
              Project.
            </li>
            <li>
              Design, Supply, Installation, Commissioning, Testing, Startup,
              Training & Maintenance of Process Control System, Power Plant
              Control System, Substation Automation System, Industrial
              Automation System, DCS System & SCADA System.
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
              Equipment.
            </li>
            <li>
              Design, Estimation, Preconstruction, Site Work, Rough Framing,
              Exterior Construction,MEP(Mechanical, Electrical& Plumbing) and
              Finishing of Construction Project(Residential & Commercial)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
