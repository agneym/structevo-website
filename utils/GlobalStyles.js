import { createGlobalStyle, css } from "styled-components";

const ScrollbarStyles = css`
  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.primary}
      ${(props) => props.theme.colors.gray[100]};
  }

  *::-webkit-scrollbar {
    width: 0.8rem;
  }
  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray[200]};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0.2rem;
  }
`;

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
    line-height: 1.6;
    background-color: ${(props) => props.theme.colors.gray[800]};
    color: ${(props) => props.theme.colors.gray[300]};
    font-family: ${(props) => props.theme.fonts.main};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
  }

  img {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }

  ${ScrollbarStyles}
`;

export default GlobalStyle;
