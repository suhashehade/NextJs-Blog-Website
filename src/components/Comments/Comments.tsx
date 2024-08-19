"use client";
import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder='write a comment...'
            className={styles.input}
            // onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>date</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            voluptatum quas quis. Nulla tempore illo, minima quaerat molestiae
            blanditiis mollitia ea dolor minus aut deleniti est itaque
            necessitatibus quod reprehenderit hic repellendus ducimus
            repudiandae et neque omnis ex fugit eveniet? Expedita odio pariatur
            asperiores, in repudiandae excepturi quae nostrum facere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
