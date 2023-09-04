import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "blog",
  description: "NextX blog page",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <div className={styles.item} key={post._id}>
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt=""
              fill
              sizes="400px"
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <Button style={{marginTop: "1.2em"}} url={`/blog/${post._id}`}>See more</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
