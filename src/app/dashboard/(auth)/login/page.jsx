"use client";

import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const email = event.target[0].value
    const password = event.target[1].value

    signIn("credentials", { email, password });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" className={styles.input} placeholder="email" required/>
        <input
          type="password"
          className={styles.input}
          placeholder="password"
          required
        />
        <Button url="">Login</Button>
      </form>
      
      --OR--

      <div className={styles.providers}>
        <button className={styles.google} onClick={() => signIn("google")}>
        <div className={styles.rectangle}>
            <Image src="/google-logo.png" alt="google" width={30} height={30}></Image>
          </div>
          Sign In with Google
        </button>
        <button className={styles.github} onClick={() => signIn("github")}>
          <div className={styles.rectangle}>
            <Image src="/github.svg" alt="github" width={30} height={30}></Image>
          </div>
          Sign In with Github
        </button>
      </div>

      <Link href="/dashboard/register" className={styles.login}>
        Don't have an accout - Register here
      </Link>
    </div>
  );
};

export default Login;
