"use client";
import React, { useState } from "react";
import styles from "./newPost.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const NewPost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type='text' placeholder='Title' className={styles.input}></input>
      <select className={styles.select}>
        <option value='style'>style</option>
        <option value='fashion'>fashion</option>
        <option value='food'>food</option>
        <option value='culture'>culture</option>
        <option value='travel'>travel</option>
        <option value='coding'>coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type='file' id='image' style={{ display: "none" }} />
            <button className={styles.addButton}>
              <label htmlFor='image'>
                <Image src='/image.png' alt='' width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell your story...'
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default NewPost;
