import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <div className={styles.icon}>
          
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; My Next.js first project. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer