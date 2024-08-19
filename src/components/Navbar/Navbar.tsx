import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='Facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='Instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='Tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='Youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>URSA-BLOG</div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
