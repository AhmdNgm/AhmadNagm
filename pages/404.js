import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React from "react";
import style from "../styles/error.module.scss";

const Error = () => {
  const Router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      <div className={style.container}>
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
          <h1>
            <span>Ops,</span> This Page Is Not Found !
          </h1>
        </motion.div>
        <div className={style.errorImg}>
          <Image
            src="/page-not-found.svg"
            alt="person"
            height={400}
            width={600}
            layout="responsive"
          />
        </div>
        <p>Go Back To Home ?</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
