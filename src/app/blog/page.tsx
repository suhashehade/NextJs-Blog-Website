import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
