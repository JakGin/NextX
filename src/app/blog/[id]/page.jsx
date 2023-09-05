import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

async function getData(id) {
  const res = await fetch(`https://next-x-xi.vercel.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogId = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.content}</p>
        <div className={styles.logo}>
          <Image src={data.img} alt="" width={80} height={80} />
          <div>Author</div>
        </div>
        <p className={styles.content}>Content</p>
      </div>
      <div className={styles.rightPanel}>
        <Image src={data.img} alt="" fill sizes="600px" />
      </div>
    </div>
  );
};

export default BlogId;
