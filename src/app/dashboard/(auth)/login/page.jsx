"use client";

import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="username" />
        <input
          type="password"
          className={styles.input}
          placeholder="password"
        />
        <Button url="">Login</Button>
      </form>
      <Link href="/dashboard/register" className={styles.login}>
        Don't have an accout - Register here
      </Link>
      <button onClick={() => signIn("github")}>Sign In with Github</button>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
};

export default Login;
