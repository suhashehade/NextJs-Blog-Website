import React from "react";
import styles from "./menu.module.css";
import MenuItem from "../MenuItem/MenuItem";
import Link from "next/link";
import Image from "next/image";

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subTitle}>{"What's hot?"}</h3>
      <h2 className={styles.title}>Most Popluar</h2>
      <div className={styles.items}>
        <MenuItem categoryName='travel' withImage={false} />
        <MenuItem categoryName='style' withImage={false} />
        <MenuItem categoryName='fashion' withImage={false} />
        <MenuItem categoryName='travel' withImage={false} />
        <MenuItem categoryName='food' withImage={false} />
      </div>
      <h3 className={styles.subTitle}>Discover by topic</h3>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categories}>
        <Link
          href='/blog?category=style'
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src='/style.png'
            alt='style'
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link
          href='/blog?category=fashion'
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src='/fashion.png'
            alt='fashion'
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href='/blog?category=food'
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src='/food.png'
            alt='food'
            width={32}
            height={32}
            className={styles.image}
          />
          food
        </Link>
        <Link
          href='/blog?category=travel'
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src='/travel.png'
            alt='travel'
            width={32}
            height={32}
            className={styles.image}
          />
          travel
        </Link>
        <Link
          href='/blog?category=culture'
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src='/culture.png'
            alt='culture'
            width={32}
            height={32}
            className={styles.image}
          />
          culture
        </Link>
        <Link
          href='/blog?category=coding'
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src='/coding.png'
            alt='coding'
            width={32}
            height={32}
            className={styles.image}
          />
          coding
        </Link>
      </div>
      <h3 className={styles.subTitle}>Chosen by the editors</h3>
      <h2 className={styles.title}>Editors Picks</h2>
      <div className={styles.items}>
        <MenuItem categoryName='travel' withImage={true} />
        <MenuItem categoryName='style' withImage={true} />
        <MenuItem categoryName='fashion' withImage={true} />
        <MenuItem categoryName='travel' withImage={true} />
        <MenuItem categoryName='food' withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
