import React from "react";
import styles from "./menuItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  categoryName: string;
  withImage: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({ categoryName, withImage }) => {
  return (
    <Link href='/' className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      )}
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

export default MenuItem;
