import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import Link from "next/link";
import styles from "/styles/project.module.scss";

SwiperCore.use([Navigation, Pagination]);
const Project = () => {
  const swiperRef = React.useRef(null);
  return (
    <div>
      <div className={styles.container}>
        <h1>Project Details</h1>
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
                  src="/1a.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/1a.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/1b.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/1c.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/1d.png"
                  className={styles.image}
                  height={400}
                  width={600}
                  alt="person"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/1e.png"
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
            <h4>Game Website</h4>
            <p>Landing page for Video Games.</p>

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
