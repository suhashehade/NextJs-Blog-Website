import Image from "next/image";
import React from "react";
import styles from "./singlePost.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";
const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Single Post</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>username</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}

            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel id
              nesciunt illum ducimus excepturi eos! Dolores veritatis eos, quo
              sequi vero unde aperiam eius voluptatem molestiae numquam dolorem
              sit blanditiis animi officiis quos ducimus aliquid obcaecati quas
              expedita pariatur porro odit. Odio excepturi accusantium tempora
              officia? Assumenda similique perspiciatis odit.
            </p>
            Lo
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
