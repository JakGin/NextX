import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "blog",
  description: "NextX blog page",
};

async function getData(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogId = async ({params}) => {
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.body}</p>
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
