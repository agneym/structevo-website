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
`;

function SectionTitle({ children }) {
  const [first, ...rest] = children.split(" ");
  return (
    <Title>
      <span>{first} </span>
      <Emphasis>{rest.join(" ")}</Emphasis>
    </Title>
  );
}

export default SectionTitle;
