import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: "login",
  description: "NextX login page",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
    </div>
  )
}

export default Login