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
            I am a Front-End Developer 👩‍💻, Code-addicted person 💙 <br /> I love
            to build Cool Websites from scratch.
            <span></span>
          </p>
          <p className={style.aboutTextTwo}>
            When I was a kid I always thought about how the computer works and
            how they build these cool games that I&apos;m playing 🎮?
            <span></span>
          </p>
          <p className={style.aboutTextThree}>
            I thought that to become a Developer I have to be so good at math. I
            wasn&apos;t good at math at all 😅 .<span></span>
          </p>
          <p className={style.aboutTextFour}>
            In 2020 that was my shot. I start learning web development. I start
            with the basics like HTML5. I remember that I was so happy to see my
            hello world on the web 🌟 .<span></span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className={style.right}>
          <p className={style.aboutTextFive}>
            First of all, my name is Ahmad Magdy Negm. I&apos;m a College
            student at the faculty of commerce 👨‍🎓.
            <span></span>
          </p>
          <p className={style.aboutTextSix}>
            I remember I&apos;ve been reading lots of awesome blogs on some
            websites. I have always been curious about how they make this
            website and does it is so hard to build a project like this website?
            <span></span>
          </p>
          <p className={style.aboutTextSaven}>
            In 2019 I start to learn Flutter, which was a new technology, but I
            didn&apos;t know anything about programming at this time. I&apos;ve
            seen a lot of tutorials about Flutter and how to start building apps
            but I didn&apos;t feel that I like app development so I quit
            programming after that 📱.
            <span></span>
          </p>
          <p className={style.aboutTextEight}>
            Now and after two years of learning web development. I&apos;m still
            learning new cool stuff every day. here I am now a front-end
            developer who likes to learn 💻.
            <span></span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default about;
