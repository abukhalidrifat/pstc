import React from "react";
import styles from "./navbar.module.css";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Navbar() {
  return (
    <>
      <DesktopNavbar  />
      <MobileNavbar />
    </>
  );
}
