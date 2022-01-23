import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import styles from "/styles/project.module.scss";

SwiperCore.use([Navigation, Pagination]);
const Project = () => {
  const swiperRef = React.useRef(null);
  return (
    <div>
      <div className={styles.container}>
        <h1>Project Details</h1>
        <div className={styles.proCon}>
          <div className={styles.imgCon}>
            <Swiper spaceBetween={10} slidesPerView={1} loop navigation>
              <SwiperSlide>
                <Image
                  src="/pexels-pixabay-273238.jpg"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pexels-pixabay-273238.jpg"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pexels-pixabay-273238.jpg"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/pexels-pixabay-273238.jpg"
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
            <li>
              <p>
                Buld it with: HTML5uld it with: HTML5uld it with: HTML5uld it
                with: HTML5 uld it with: HTML5 uld it with: HTML5 uld it with:
                HTML5 uld it with: HTML5 uld it with: HTML5 uld it with: HTML5
                uld it with: HTML5
              </p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
