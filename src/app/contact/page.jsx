'use client'
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";


const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://i.ibb.co/KhDcq3r/events.jpg"
            alt="dash"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Page;