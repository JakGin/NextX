import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: "dashboard",
  description: "Admin dashboard",
};

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard