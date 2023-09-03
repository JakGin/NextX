import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({ url, children, ...rest }) => {
  return url ? (
    <Link href={url}>
      <button className={styles.button} {...rest}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
