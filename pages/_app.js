import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../utils/GlobalStyles";
import theme from "../utils/theme";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Structevo</title>
          <link
            href="https://fonts.googleapis.com/css?family=Inter|Work+Sans:500&display=swap"
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