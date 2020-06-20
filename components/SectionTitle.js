import React from "react";
import styled from "styled-components";

import Emphasis from "./Emphasis";

const Title = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  font-size: 3.6rem;
  letter-spacing: 0.9rem;
  margin-bottom: 10rem;
  position: relative;

  &::after {
    font-family: ${(props) => props.theme.fonts.main};
    content: '${(props) => props.text}';
    position: absolute;
    text-transform: capitalize;
    font-weight: 700;
    opacity: 0.03;
    font-size: 12rem;
    top: 4rem;
    left: 10%;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.colors.white};
    z-index: -1;
  }
`;

function SectionTitle({ children }) {
  const [first, ...rest] = children.split(" ");
  return (
    <Title text={first}>
      <span>{first} </span>
      <Emphasis>{rest.join(" ")}</Emphasis>
    </Title>
  );
}

export default SectionTitle;
