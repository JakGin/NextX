import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "portfolio",
  description: "NextX portfolio",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Choose a gallery</h2>
      <div className={styles.itemsContainer}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
