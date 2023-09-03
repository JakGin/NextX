import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "blog",
  description: "NextX blog page",
};

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.item} href="/blog/blogTitle">
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/8438944/pexels-photo-8438944.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            fill
            sizes="400px"
            className={styles.img}
          />
        </div>
        <div className={styles.text}>
          <h1>Blog</h1>
          <p>Desc</p>
        </div>
      </Link>
      <Link className={styles.item} href="/blog/blogTitle">
        <Image
          src="https://images.pexels.com/photos/8438944/pexels-photo-8438944.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          width={400}
          height={250}
        />
        <div className={styles.text}>
          <h1>Blog</h1>
          <p>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
