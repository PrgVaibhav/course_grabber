"use client";

import styles from "@/styles/card.module.css";
import { useEffect, useState } from "react";
import { BiTime, BiCategoryAlt } from "react-icons/bi";
export default function Card() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <section className={styles.course_container}>
      <div className={styles.course_cards}>
        {data.map((item) => {
          return (
            <div className={styles.course_card} key={item.id}>
              <div className={styles.course_card_image}>
                <img src={item.thumbnail} alt="course" />
              </div>
              <div className={styles.course_card_content}>
                <h3>{item.title}</h3>
                <span>{item.brand}</span>
              </div>
              <div className={styles.course_card_border}></div>
              <div className={styles.course_card_footer}>
                <span>
                  <BiTime /> {item.price}
                </span>
                <span>
                  <BiCategoryAlt />
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
