import React from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import styles from "../styles/contact.module.scss";
const contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_ndopxou",
      "template_1m2ltqt",
      e.target,
      "user_6smHvkdcG1YI59d6GpS1N"
    );
    window.location.reload();
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => console.log(err));
  }
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.formContainer}>
          <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="Name" />
            <label>Subject</label>
            <input type="text" name="Subject" />

            <label>Email</label>
            <input type="email" name="Email" />

            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" className={styles.submit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
