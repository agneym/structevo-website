import React from "react";
import styled from "styled-components";

import Emphasis from "../Emphasis";
import NakedList from "../NakedList";
import SpecItem from "./SpecItem";

const Container = styled.div`
  grid-column-start: 3;
  padding: 0 6rem;
`;

const Heading = styled.h3`
  font-size: 3.3rem;
  line-height: 1.2;
  margin-top: 0;
`;

function SpecSection() {
  return (
    <Container>
      <Heading>
        <span>our specialisation</span>
        <Emphasis>:</Emphasis>
      </Heading>
      <NakedList>
        <SpecItem image={"/about/icon-architecture.png"}>Architecture</SpecItem>
        <SpecItem image={"/about/icon-interiors.png"}>Interiors</SpecItem>
        <SpecItem image={"/about/icon-planing.png"}>Planning</SpecItem>
      </NakedList>
    </Container>
  );
}

export default SpecSection;
