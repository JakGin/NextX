import React from "react";
import styles from "./page.module.css";
import { items } from "./data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/Button";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);

  const capitalisedCatTitle =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{capitalisedCatTitle}</h2>
      <div className={styles.itemsContainer}>
        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.text}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Button url="#">See more</Button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={item.image} alt="" fill className={styles.img} sizes="1000px"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
