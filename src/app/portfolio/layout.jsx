import React from "react";
import styles from "./page.module.css";

const PortfolioLayout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
