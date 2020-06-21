import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import "@brainhubeu/react-carousel/lib/style.css";
import GlobalStyle from "../utils/GlobalStyles";
import theme from "../utils/theme";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Structevo - Architecture & Interior Design</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Oswald:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </>
    );
  }
}
