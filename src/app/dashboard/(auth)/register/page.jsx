"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "register",
  description: "NextX register page",
};

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="username" />
        <input type="email" className={styles.input} placeholder="email" />
        <input
          type="password"
          className={styles.input}
          placeholder="password"
        />
        <Button url="">Register</Button>
      </form>
      <Link href="/dashboard/login" className={styles.login}>
        Login with existing accout
      </Link>
    </div>
  );
};

export default Register;
