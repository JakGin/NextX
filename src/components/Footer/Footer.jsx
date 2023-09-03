import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link href="https://www.facebook.com/" className={styles.icon}>
          <Image src="/1.png" alt="social icon" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com/" className={styles.icon}>
          <Image src="/2.png" alt="social icon" width={25} height={25} />
        </Link>
        <Link href="https://www.twitter.com/" className={styles.icon}>
          <Image src="/3.png" alt="social icon" width={25} height={25} />
        </Link>
        <Link href="https://www.youtube.com/" className={styles.icon}>
          <Image src="/4.png" alt="social icon" width={25} height={25} />
        </Link>
      </div>
      <div className={styles.copyright}>
        <p>&copy; My Next.js first project. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
