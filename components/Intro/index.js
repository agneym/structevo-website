import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Section = styled.section`
  max-width: 1280px;
  margin: 5rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5rem 0;
`;

function Intro() {
  return (
    <Section>
      <FirstSection />
      <SecondSection />
    </Section>
  );
}

export default Intro;
