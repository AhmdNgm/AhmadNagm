import Layout from "../Layout/Layout";
import "../styles/globals.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { ThemeProvider, useTheme } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider themes={["light", "purple", "green"]}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
