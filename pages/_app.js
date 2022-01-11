import Layout from "../Layout/Layout";
import "../styles/globals.scss";
import React from "react";
import { ThemeProvider, useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={["light", "purple", "green"]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
