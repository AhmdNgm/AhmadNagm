import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";

import styles from "../styles/blog.module.scss";
const blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Journey" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.blogContainer}>
        <div className={styles.blogContent}>
          <div className={styles.blogHead}>
            <div className={styles.avatar}>
              <Image
                src="/../public/negm.jpg"
                className={styles.image}
                height={10}
                width={10}
                alt="person"
                layout="responsive"
              />
            </div>
            <h3>Ahmad Nagm</h3>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint ipsa nobis sunt, quibusdam Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint ipsa nobis sunt,
              quibusdam
            </p>
          </div>
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blogHead}>
            <div className={styles.avatar}>
              <Image
                src="/../public/negm.jpg"
                className={styles.image}
                height={10}
                width={10}
                alt="person"
                layout="responsive"
              />
            </div>
            <h3>Ahmad Nagm</h3>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
          </div>
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blogHead}>
            <div className={styles.avatar}>
              <Image
                src="/../public/negm.jpg"
                className={styles.image}
                height={10}
                width={10}
                alt="person"
                layout="responsive"
              />
            </div>
            <h3>Ahmad Nagm</h3>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint ipsa nobis sunt, quibusdam Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint ipsa nobis sunt,
              quibusdam
            </p>
          </div>
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blogHead}>
            <div className={styles.avatar}>
              <Image
                src="/../public/negm.jpg"
                className={styles.image}
                height={10}
                width={10}
                alt="person"
                layout="responsive"
              />
            </div>
            <h3>Ahmad Nagm</h3>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
          </div>
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blogHead}>
            <div className={styles.avatar}>
              <Image
                src="/../public/negm.jpg"
                className={styles.image}
                height={10}
                width={10}
                alt="person"
                layout="responsive"
              />
            </div>
            <h3>Ahmad Nagm</h3>
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint ipsa nobis sunt, quibusdam Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sint ipsa nobis sunt,
              quibusdam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
