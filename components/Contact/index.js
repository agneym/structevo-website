import React from "react";
import styled from "styled-components";

import Form from "./Form";

const Section = styled.section`
  margin: 5rem 0 3.5rem;
  background-color: ${(props) => props.theme.colors.gray[200]};
  overflow: auto;
`;

const Content = styled.div`
  max-width: 102rem;
  margin: 5rem auto;
  padding: 5rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border-radius: 0.5rem;
`;

function Contact() {
  return (
    <Section>
      <Content>
        <h2
          css={`
            margin-bottom: 0.5rem;
          `}
        >
          Get in Touch
        </h2>
        <p>Send us a message and we will respond as soon as possible</p>
        <Form />
      </Content>
    </Section>
  );
}

export default Contact;
