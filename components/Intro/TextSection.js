import React from "react";
import styled from "styled-components";

import Emphasis from "../Emphasis";

const Container = styled.div`
  grid-column-start: 2;
  padding-right: 2rem;
`;

const Heading = styled.h3`
  font-size: 2.8rem;
  margin-top: 0;
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

function TextSection() {
  return (
    <Container>
      <Heading>
        <span>we turn ideas into works of art</span>
        <Emphasis>.</Emphasis>
      </Heading>
      <Text>
        For each project we establish relationships with partners who we know
        will help us create added value for your project. As well as bringing
        together the public and private sectors, we make sector-overarching
        links to gather knowledge and to learn from each other. The way we
        undertake projects is based on permanently applying values that
        reinforce each other: socio-cultural value, experiental value,
        building-technical value and economical value.
      </Text>
    </Container>
  );
}

export default TextSection;
