import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../utils/GlobalStyles";
import theme from "../utils/theme";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
