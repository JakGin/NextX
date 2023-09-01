"use client";

import { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ThemeToggle;
