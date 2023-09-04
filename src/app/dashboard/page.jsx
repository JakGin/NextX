"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import Button from "@/components/Button/Button";
import { useSession } from "next-auth/react";

export const metadata = {
  title: "dashboard",
  description: "Admin dashboard",
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/posts",
    fetcher
  );
  const session = useSession();
  console.log(session);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>{data[0]?.title}</p>
      <Button
        onClick={() => {
          console.log("works");
        }}
      >
        this is it
      </Button>
    </div>
  );
};

export default Dashboard;
