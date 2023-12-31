import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

export const metadata = {
  title: "contact",
  description: "NextX contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img} sizes="500px"/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="message"
            className={styles.input}
          ></textarea>
          <Button url="#">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
