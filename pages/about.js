import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import style from "../styles/about.module.scss";
const about = () => {
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
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className={style.container}
    >
      <Head>
        <title>My Journey</title>
        <meta name="description" content="My Journey" />
      </Head>
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
        <h1 className={style.title}>My Journey</h1>
      </motion.div>
      <motion.div variants={stagger} className={style.aboutContainer}>
        <motion.div variants={fadeInUp} className={style.left}>
          <p className={style.aboutTextOne}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextTwo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextThree}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextFour}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className={style.right}>
          <p className={style.aboutTextFive}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextSix}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextSaven}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
          <p className={style.aboutTextEight}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsa
            nobis sunt, quibusdam
            <span></span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default about;
