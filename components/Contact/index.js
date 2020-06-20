import React from "react";
import styled from "styled-components";

import Form from "./Form";
import Info from "./Info";
import SectionTitle from "../SectionTitle";

const Section = styled.section`
  margin: 10rem auto 16rem;
  padding: 0 1rem;
`;

function Contact() {
  return (
    <Section id="contact">
      <SectionTitle shadowText="Contact">Get in touch</SectionTitle>
      <Form />
    </Section>
  );
}

export default Contact;
