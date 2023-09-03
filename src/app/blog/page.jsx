import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "blog",
  description: "NextX blog page",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

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
        <Link className={styles.item} href={`blog/${post.id}`} key={post.id}>
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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
