import React from "react";
import styled from "styled-components";

import Form from "./Form";
import Info from "./Info";
import SectionTitle from "../SectionTitle";

const Section = styled.section`
  margin: 10rem auto 16rem;
  padding: 0 1rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function Contact() {
  return (
    <Section id="contact">
      <SectionTitle shadowText="Contact">Get in touch</SectionTitle>
      <Container>
        <Info />
        <Form />
      </Container>
    </Section>
  );
}

export default Contact;
