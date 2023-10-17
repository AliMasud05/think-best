import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";

const About = () => {
  return (
  <div className="flex justify-center">
      <div className={styles.ab_container}>
        <h1 className="text-3xl text-center my-3">Know Something About Us</h1>
        <div className={styles.imgContainer}>
          {/* <Image
            src="https://i.ibb.co/JFJsrHG/product-500x500.webp"
            alt="your alt text"
            className='w-full h-[500px]'
            width={500}
            height={500}

          /> */}
          <Image
            src="https://i.ibb.co/JFJsrHG/product-500x500.webp"
            alt="Picture of the author"
            width={500}
            height={500}
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className={`${styles.textContainer} sm:flex`}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
              esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
              officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
              Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Link href='/contact'> Contact </Link>
            
          </div>
        </div>
      </div>
  </div>
  );
};

export default About;
