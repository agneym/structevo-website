import React from "react";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import LogoSection from "./LogoSection";

const Section = styled.section`
  margin: 10rem auto 16rem;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Clients() {
  return (
    <Section id="clients">
      <SectionTitle shadowText="Clients">Our Clients</SectionTitle>
      <Container>
        <LogoSection />
      </Container>
    </Section>
  );
}

export default Clients;
