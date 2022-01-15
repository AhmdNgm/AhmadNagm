import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";

import style from "../styles/about.module.scss";
const about = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>My Journey</title>
        <meta name="description" content="My Journey" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={style.title}>My Journey</h1>
      <div className={style.aboutContainer}>
        <div className={style.left}>
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
        </div>

        <div className={style.right}>
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
        </div>
      </div>
    </div>
  );
};

export default about;
