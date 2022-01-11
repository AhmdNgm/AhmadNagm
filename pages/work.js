import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";

import styles from "../styles/work.module.scss";

const work = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Work</title>
        <meta name="description" content="My Journey" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>My Work</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/pexels-pixabay-273238.jpg"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>The Title Of The Post</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
              nobis sunt, quibusdam
            </p>
            <Link href="/">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
