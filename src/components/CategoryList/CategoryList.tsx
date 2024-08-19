import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@prisma/client";

// interface Category {
//   id: string;
//   slug: string;
//   title: string;
//   image: string;
// }

const CategoryList = async () => {
  const getCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw Error("failed");
    }
    return res.json();
  };
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((c: Category) => (
          <Link
            key={c.id}
            href={`/blog?category=${c.title}`}
            className={`${styles.category} ${styles[c.title]} `}
          >
            <Image
              src={c.image || "/"}
              alt={`${c.title}`}
              width={32}
              height={32}
              className={styles.image}
            />

            {c.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
