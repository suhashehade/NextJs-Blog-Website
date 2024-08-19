"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navLinks.module.css";
import AuthLinks from "../AuthLinks/AuthLinks";
const NavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.navLinks}>
        <Link href='/' className={styles.link}>
          Home
        </Link>
        <Link href='/contact' className={styles.link}>
          Contact
        </Link>
        <Link href='/about' className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.links}>
          <Link href='/' className={styles.link}>
            Home
          </Link>
          <Link href='/contact' className={styles.link}>
            Contact
          </Link>
          <Link href='/about' className={styles.link}>
            About
          </Link>
          <AuthLinks />
        </div>
      )}
    </>
  );
};

export default NavLinks;
