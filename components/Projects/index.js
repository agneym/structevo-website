import React from "react";
import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import CustomCarousel from "./Carousel";

const Section = styled.section`
  margin: 10rem auto 16rem;
`;

function Clients() {
  return (
    <Section id="projects">
      <SectionTitle shadowText="Projects">Our Projects</SectionTitle>
      <CustomCarousel />
    </Section>
  );
}

export default Clients;
