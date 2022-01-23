import { useRef as UseRef } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import styles from "../styles/contact.module.scss";
const contact = () => {
  const form = UseRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ndopxou",
        "template_jse0yw7",
        form.current,
        "user_6smHvkdcG1YI59d6GpS1N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.formContainer}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Subject</label>
            <input type="text" name="subject" />

            <label>Email</label>
            <input type="email" name="email" />

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
