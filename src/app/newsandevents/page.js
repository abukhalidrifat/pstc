import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

export default function Newsandevents() {
  return (
    <>
      <Topbar />
      <Navbar />
      <section>
        <h1 style={{ fontSize: "4rem", textAlign: "center", padding: "100px" }}>
          Stay with us for get our regular news & event updates
        </h1>
      </section>
      <Footer />
    </>
  );
}
