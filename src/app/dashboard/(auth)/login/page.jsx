import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button';
import Link from 'next/link';

export const metadata = {
  title: "login",
  description: "NextX login page",
};

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
    </div>
  )
}

export default Login