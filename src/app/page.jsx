import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tach industry
        </p>
        <div>
          <Button url="/portfolio">See Our Work</Button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="" className={styles.img} fill priority sizes="600px"/>
      </div>
    </main>
  );
}
