"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occured</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const desc = event.target[1].value;
    const img = event.target[2].value;
    const content = event.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image
                  src={post.img}
                  alt=""
                  width={200}
                  height={100}
                  className={styles.img}
                  priority={false}
                />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Content"
            id=""
            cols="30"
            rows="10"
            className={styles.textArea}
            required
          ></textarea>
          <Button style={{ width: "100%" }}>Add Post</Button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
