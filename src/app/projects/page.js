"use client";
import React from "react";
import styles from "../customer/Customer.module.css";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import projects from "@/utils/projects.json";

export default function Projects() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <div className={styles.title}>
          <p>OUR PROJECTS</p>
        </div>
        <div className={styles.ourServices}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Particulars of work/supply order</th>
                <th>Date of Starting</th>
                <th>Date of Completion</th>
              </tr>
            </thead>
            <tbody>
              {
                projects.map((item,index)=>(
                    <>
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.particular}</td>
                            <td>{item.start}</td>
                            <td>{item.end}</td>
                        </tr>
                    </>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}
