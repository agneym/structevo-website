import React from "react";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import TextSection from "./TextSection";
import SpecSection from "./SpecSection";

const Section = styled.section`
  margin: 10rem auto 16rem;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const ImageContainer = styled.div`
  grid-column-start: 4;
  box-shadow: ${(props) => props.theme.shadows.md};
`;

function Intro() {
  return (
    <Section>
      <SectionTitle>About StructEvo</SectionTitle>
      <Container>
        <TextSection />
        <SpecSection />
        <ImageContainer>
          <img src="/thing.jpg" alt="" />
        </ImageContainer>
      </Container>
    </Section>
  );
}

export default Intro;
