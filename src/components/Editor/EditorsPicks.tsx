import React from "react";
import styles from "./editorsPicks.module.css";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  categoryName: string;
}
const EditorsPicks: React.FC<MenuItemProps> = ({ categoryName }) => {
  return (
    <Link href='/' className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles[categoryName]}`}>
          {categoryName}
        </span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>Suha Shehadeh -</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </div>
    </Link>
  );
};

export default EditorsPicks;
