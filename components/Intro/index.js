import React from "react";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import TextSection from "./TextSection";

const Section = styled.section`
  margin: 8rem auto 10rem;
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
        <ImageContainer>
          <img src="/thing.jpg" alt="" />
        </ImageContainer>
      </Container>
    </Section>
  );
}

export default Intro;
