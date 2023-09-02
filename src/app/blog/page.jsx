import React from 'react'
import styles from "./page.module.css"

export const metadata = {
  title: "blog",
  description: "NextX blog page",
};

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
    </div>
  )
}

export default Blog