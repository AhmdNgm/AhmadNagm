import { useRef as UseRef } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import styles from "../styles/contact.module.scss";
const contact = () => {
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
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
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
          <h1 className={styles.title}>Contact</h1>
        </motion.div>
        <motion.div variants={stagger} className={styles.formContainer}>
          <motion.div variants={fadeInUp}>
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
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default contact;
