import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { motion } from "framer-motion";
import styles from "../styles/blog.module.scss";
const blog = () => {
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
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Journey" />
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
          <h1 className={styles.title}>Blog</h1>
        </motion.div>
        <motion.div variants={stagger} className={styles.blogContainer}>
          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <p>
                At this point, I became ok with not being up-to-date with
                everything in tech. I chose the technologies I want to focus on,
                and will keep at it. Trying to learn everything was my biggest
                source of energy loss and stress 💻
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <h4>Youtube Channels for Web dev &#9749;</h4>
              <p>
                When I start to study Web Development I struggled to find a good
                mentor to teach me the basics and make me love this career but
                after a lot of searching, I&apos;ve found my top instructors and
                I&apos;ve learned from them so much.
              </p>
              <a href="https://www.youtube.com/c/TheCoderCoder/featured">
                CoderCoder
              </a>
              <br />
              <a href="https://www.youtube.com/c/ElzeroInfo">
                Elzero WebSchool
              </a>
              <br />
              <a href="https://www.youtube.com/c/DennisIvy">DennisIvy</a> <br />
              <a href="https://www.youtube.com/channel/UC-MNF_TXywelItd7M8d-uHA">
                kimz codes
              </a>
              <br />
              <a href="https://www.youtube.com/c/DesignCourse">DesignCourse</a>
              <br />
              <a href="https://www.youtube.com/c/DevEd">Dev Ed</a> <br />
              <a href="https://www.youtube.com/colbz">Colby Fayock</a> <br />
              <a href="https://www.youtube.com/c/TraversyMedia">
                Traversy Media
              </a>
              <br />
              <a href="https://www.youtube.com/c/Fireship">Fireship</a> <br />
              <a href="https://www.youtube.com/c/Codezilla">Codezilla</a> <br />
              <a href="https://www.youtube.com/c/ChrisCourses">Chris Courses</a>
              <br />
              <a href="https://www.youtube.com/kepowob">Kevin Powell</a> <br />
              <a href="https://www.youtube.com/c/Freecodecamp">
                freeCodeCamp.org
              </a>
              <br />
              <a href="https://www.youtube.com/c/AdrianTwarog">Adrian Twarog</a>
              <br />
              <a href="https://www.youtube.com/channel/UCMHlhjLjBa-1txotColRXgw/videos">
                TK
              </a>
              <br />
              <a href="https://www.youtube.com/c/JavaScriptMastery">
                JavaScript Mastery
              </a>
              <br />
              <a href="https://www.youtube.com/c/WebDevSimplified">
                Web Dev Simplified
              </a>
              <br />
              <a href="https://www.youtube.com/c/TheNetNinja">The Net Ninja</a>
              <br />
              <a href="https://www.youtube.com/c/wcandillon/featured">
                William Candillon
              </a>
              <br />
              <div className={styles.youtube}>
                <ReactPlayer
                  className={styles.ReactPlayer}
                  url="https://youtu.be/D-_cGLonkCQ"
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <h4>What is the most difficult Situation for me? 🙁</h4>
              <p>
                The most difficult Situation for me? is The start of every
                project.. it&apos;s so scary for every developer to see the
                white page and start thinking about how to start to fill this
                white page with colors, text, and images? what should come first
                and what steps should I take? it&apos;s so scary for every
                developer but there are a lot of steps you can take to get over
                it
              </p>
              <p className={styles.desc}>
                <span>Step One:</span> Information Gathering, <br />
                <span>Step Two:</span> Planning,
                <br />
                <span>Step Three:</span> Design,
                <br /> <span>Step Four:</span> Content Writing and Assembly,
                <br /> <span>Step Five:</span> Coding,
                <br /> <span>Step Six:</span> Testing,
                <br /> <span>Step Savin:</span> Review and Launch,
                <br /> <span>Step Eight:</span> Maintenance.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <h4>Top 10 Websites for me 🤓</h4>
              <p>
                Every programmer have struggled with something through his
                coding so for me these are my top 10 websites which helped me a
                lot.
              </p>
              <a href="https://xbsoftware.com/">xbsoftware</a> <br />
              <a href="https://www.smashingmagazine.com/">smashingmagazine</a>
              <br />
              <a href="https://dev.to/">dev</a> <br />
              <a href="https://stackoverflow.com/">stackoverflow</a> <br />
              <a href="https://developer.mozilla.org/en-US/">MDN WEB Docs</a>
              <br />
              <a href="https://www.w3schools.com/">w3schools</a> <br />
              <a href="https://github.com/">github</a> <br />
              <a href="https://www.udemy.com/">udemy</a> <br />
              <a href="https://www.geeksforgeeks.org/">geeksforgeeks</a> <br />
              <a href="https://www.udacity.com/">udacity</a> <br />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <h4>
                Here&apos;s my top 15 website where i can get cool free icons
                and no Copywrite Images. &#128512;
              </h4>
              <p>
                For me the first thing I should be ready for when I start any
                project is Icons and Images so here&apos;s my top 15 website
                where i can get cool free icons and no Copywrite Images.
              </p>
              <a href="http://iconmonstr.com/">iconmonstr</a> <br />
              <a href="http://www.flaticon.com/">flaticon.com</a> <br />
              <a href="http://dryicons.com/">dryicons</a> <br />
              <a href="http://mricons.com/">mricons</a> <br />
              <a href="http://graphicburger.com/icons-set/">graphicburger</a>
              <br />
              <a href="http://www.pixeden.com/icons-set">pixeden</a> <br />
              <a href="https://www.iconfinder.com/">iconfinder</a> <br />
              <a href="http://mariodelvalle.github.io/CaptainIconWeb/">
                Captain Icon
              </a>
              <br />
              <a href="http://goodstuffnononsense.com/portfolio_tag/free/">
                Good Stuff Nonsense
              </a>
              <br />
              <a href="http://freebiesbug.com/psd-freebies/icons/">
                freebies bug
              </a>
              <br />
              <a href="http://designbeep.com/category/freebies/icons-freebies/">
                designbeep
              </a>
              <br />
              <a href="https://unsplash.com/">unsplash</a> <br />
              <a href="https://www.pexels.com/">pexels</a> <br />
              <a href="https://www.vecteezy.com/free-photos">vecteezy</a> <br />
              <a href="https://pixabay.com/photos/search/business/">pixabay</a>
              <br />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.blogContent}>
            <div className={styles.blogHead}>
              <div className={styles.avatar}>
                <Image
                  src="/neggm.png"
                  className={styles.image}
                  height={10}
                  width={10}
                  alt="person"
                  layout="responsive"
                />
              </div>
              <h3>Ahmad Nagm</h3>
            </div>
            <div className={styles.text}>
              <h4>Why Is Website Development so Important? &#9998;</h4>

              <div className={styles.image}>
                <Image
                  src="/pexels-pixabay-270404.jpg"
                  className={styles.image}
                  height={400}
                  width={600}
                  layout="responsive"
                  alt="person"
                />
              </div>
              <p>
                As human beings, we pride ourselves on our superb adaptation
                skills and ability to change with the times. Stemming from this,
                when the social world shifted from a place of interpersonal
                connections to internet connections, so did the world of
                business. There&apos;s no getting around it; our
                digitally-driven lifestyle has given us little choice but to
                adapt to technology, and if you haven&apos;t already, it&apos;s
                time to get a move on. It&apos;s a no-brainer; website
                development is now essential to you as a business person. For
                your business to generate more business, your voice needs to be
                heard, your brand needs to be seen, and your goals need to be
                reached. Website development is the key to making those things
                happen. The same way an eye is the window to the soul, a website
                is the window to the business, giving customers a taste of what
                you have to offer and enticing them to delve deeper for more.
              </p>
              <p>
                We are simple creatures in that we like convenience, and
                there&apos;s nothing more convenient than accessing a whole host
                of information by simply clicking a button, which is what
                millions of people do when they go online every day. If your
                product can&apos;t be found on the other side of that click,
                you&apos;ve already lost access to those millions of people, and
                your company effectively doesn&apos;t exist. In conjunction with
                this, establishing a strong web presence as a business while
                reaching millions of internet surfers who might become potential
                clients will elevate your product to a universally compatible
                entity, even if the service you provide is physically localized
                to a specific place. So what kind of information is valuable to
                showcase on your website, in order to leave a maximal impact?
              </p>
              <p>
                Website development is a way to make people aware of the
                services and/or products you are offering, understand why your
                products are relevant and even necessary for them to buy or use,
                and see which of your company&apos;s qualities set it apart from
                competitors. Displaying this information with high-quality
                images and thought-out presentation will have a large influence
                on customers, and it is important to strive towards making your
                product as relatable and appealing as possible. Additionally,
                with website development you can:
              </p>
              <p>
                1. Communicate with your visitors effectively. Interacting with
                your audience is vital when it comes to generating more
                business. It is viable to make a website that enables you to get
                in touch with your customers and prospects, and you can produce
                valuable content for the audience associated with the industry
                or business you&apos;re in. Afterwards, post the content on your
                blog, share it on social media networks and respond to
                customers&apos; comments and feedback promptly. This will show
                your clients the extent to which you&apos;re concerned about
                their satisfaction and responsive to their needs.
              </p>
              <p>
                2. Improve your connectivity. A website will facilitate things
                like expanding your reach and attracting more visitors to your
                business. Planning to make a responsive website design for your
                site will help make it accessible to an extensive range of users
                spanning several devices, such as tablets or smartphones. This
                will increase both your site&apos;s exposure and organic
                traffic.
              </p>
              <p>
                3. Prove your reliability. A website offers a straightforward
                method of showing the credibility of a business, and the way a
                person represents his business online is vital for attracting
                more customers or visitors. Therefore, your website design
                should be handled in the best possible way, because a
                professional presentation speaks volumes as testimony to your
                business. With the help of website development, you can add your
                skills, credentials, experience, expertise and more in a single
                place. These details help you earn the trust and confidence of
                your visitors and serve as a reference point for customers
                interested in your business, making it easy for you to produce
                leads.
              </p>
              <p>
                To sum up, it&apos;s pretty clear that website development plays
                a big role in successful business marketing. Without it, it
                would be very difficult to leave your mark on a global level. So
                make life easier for yourself! Start adapting, develop a
                website, and get ready to collect the benefits of your success.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default blog;
