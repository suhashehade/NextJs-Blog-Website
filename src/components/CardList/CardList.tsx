import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import PostItem from "../Post/Post";
import { Category } from "@prisma/client";

interface Props {
  page: number;
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

const CardList: React.FC<Props> = async ({ page }) => {
  const getPosts = async (page: number) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw Error("failed to fetch categories");
    }
    return res.json();
  };

  const {posts, count} = await getPosts(page).catch((err) => {
    console.error(err);
    return undefined;
  });

  if (!posts) {
    return <div>Failed to load categories</div>;
  }

 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post: Post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      <Pagination page={page} count={count} />
    </div>
  );
};

export default CardList;
