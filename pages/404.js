import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

import style from "../styles/error.module.scss";

const error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      <div className={style.container}>
        <h1>
          <span>Ops,</span> This Page Is Not Found !
        </h1>
        <div className={style.errorImg}>
          <Image
            src="/../public/page-not-found.svg"
            alt="person"
            height={400}
            width={600}
            alt="person"
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

export default error;
