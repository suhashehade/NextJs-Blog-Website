import Image from "next/image";
import React from "react";
import styles from "./post.module.css";
import { Category } from "@prisma/client";
// import type { Post } from "@prisma/client";

interface Props {
  post: Post;
}
interface Post {
  id: string;
  title: string;
  desc: string;
  image: string | null;
  views: number;
  catId: string;
  category: Category;
  userEmail: string;
  createdAt: Date;
}

const PostItem: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString();
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image
          src={`${post.image || "/p1.jpeg"} `}
          alt=''
          fill
          className={styles.image}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <p className={styles.date}>{formattedDate} - </p>
          <p className={styles.category}>{post.category.title}</p>
        </div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postDesc}>{post.desc}</p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default PostItem;
