import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogId = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <div className={styles.logo}>
          <Image src="https://images.pexels.com/photos/8438944/pexels-photo-8438944.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" width={80} height={80} />
          <div>Author</div>
        </div>
        <p className={styles.content}>Content</p>
      </div>
      <div className={styles.rightPanel}>
      <Image src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" fill sizes="600px" />
      </div>
    </div>
  );
};

export default BlogId;
