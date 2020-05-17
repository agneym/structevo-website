import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.gray[800]};
    font-family: ${(props) => props.theme.fonts.main};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
