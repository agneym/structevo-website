import React from "react";
import styled from "styled-components";

import FirstSection from "./FirstSection";

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

function Intro() {
  return (
    <Section>
      <FirstSection />
    </Section>
  );
}

export default Intro;
