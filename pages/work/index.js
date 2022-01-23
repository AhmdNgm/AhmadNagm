import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";

import styles from "/styles/work.module.scss";

const work = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Work</title>
        <meta name="description" content="My Journey" />
      </Head>
      <h1 className={styles.title}>My Work</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/3.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Chat Website</h4>
            <p>Awesome Simple Design for chat website....</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/one.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Game Website Layout</h4>
            <p>Game website design with dark colors...</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/2.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Landing Page</h4>
            <p>Awesome Landing Page Design for a Company website...</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/4.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Dashboard Design page</h4>
            <p>Simple Dashboard Design Page for Admin Page etc...</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/5.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Profile Page</h4>
            <p>Simple Profile Page Design With a lot of options...</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/11.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Landing Page</h4>
            <p>Cool design for landing page for personal Portfolio..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/6.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Invoices System</h4>
            <p>Invoices System Cool Design with simple control..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/7.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Landing Page</h4>
            <p>Cool Design For Landing page for Gym website...</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/10.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Landing Page</h4>
            <p>Cool Design for Landing Page For Online Banking..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/nine.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Company Website</h4>
            <p>Cool Design for Landing Page For Company Website..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/8.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Photographer Portfolio</h4>
            <p>Cool Design for Photographer Personal Portfolio..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              src="/12.png"
              className={styles.image}
              height={400}
              width={600}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className={styles.cardBody}>
            <h4>Landing Page</h4>
            <p>Cool Design for Landing Page For Company Website..</p>
            <Link href="/work/1">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
