"use client"

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

export const metadata = {
  title: "dashboard",
  description: "Admin dashboard",
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>{data[0]?.title}</p>
    </div>
  );
};

export default Dashboard;
