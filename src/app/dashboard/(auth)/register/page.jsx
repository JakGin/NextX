"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";
import ErrorMessage from "@/components/Message/ErrorMessage";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=account-has-been-created");
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} placeholder="username" required/>
        <input type="email" className={styles.input} placeholder="email" required/>
        <input
          type="password"
          className={styles.input}
          placeholder="password"
          required
        />
        <Button>Register</Button>
      </form>
      {error && <ErrorMessage>Something went wrong!</ErrorMessage>}
      <Link href="/dashboard/login" className={styles.login}>
        Login with existing accout
      </Link>
    </div>
  );
};

export default Register;
