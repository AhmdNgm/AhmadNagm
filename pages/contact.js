import React from "react";
import Head from "next/head";

import styles from "../styles/contact.module.scss";
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="My Journey" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Contact</h1>
    </div>
  );
};

export default contact;
