import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Post from "../Post/Post";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <Post />
    </div>
  );
};

export default Featured;
