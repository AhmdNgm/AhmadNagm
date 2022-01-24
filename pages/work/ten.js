import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "/styles/project.module.scss";

SwiperCore.use([Navigation, Pagination]);
const Project = () => {
  const swiperRef = React.useRef(null);
  return (
    <div>
      <div className={styles.container}>
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
          <h1>Project Details</h1>
        </motion.div>

        <div className={styles.btncon}>
          <Link href="/work">
            <a className={styles.goback}>Go Back</a>
          </Link>
        </div>
        <div className={styles.proCon}>
          <div className={styles.imgCon}>
            <Swiper spaceBetween={10} slidesPerView={1} loop navigation>
              <SwiperSlide>
                <Image
                  src="/nine.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9a.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9b.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9c.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9d.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9e.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/9f.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <ul>
            <h4>Company Website</h4>
            <p>Cool Design for Landing Page For Company Website.</p>

            <p>Build it Using :</p>

            <li>
              <p>HTML5</p>
            </li>
            <li>
              <p>SASS</p>
            </li>
            <li>
              <p>JS</p>
            </li>
            <li>
              <p>Bootstrap5</p>
            </li>
            <li>
              <p>Owl Caroussel</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
