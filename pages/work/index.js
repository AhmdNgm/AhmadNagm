import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";

import styles from "/styles/work.module.scss";

const work = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.1,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <Head>
        <title>My Work</title>
        <meta name="description" content="My Journey" />
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className={styles.container}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className={styles.title}>My Work</h1>
        </motion.div>

        <motion.div variants={stagger} className={styles.cardContainer}>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/one">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="/1a.png"
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
              <Link href="/work/two">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/three">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/four">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/five">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/six">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/seven">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/eight">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/nine">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="/9.png"
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
              <Link href="/work/ten">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/eleven">Read more</Link>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.card}>
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
              <Link href="/work/twelve">Read more</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default work;
