import React from "react";
import styled from "styled-components";

import Form from "./Form";
import Info from "./Info";

const Section = styled.section`
  margin: 8rem 0 0;
  background-color: ${(props) => props.theme.colors.gray[200]};
  overflow: auto;
  padding-bottom: 3.5rem;
`;

const Content = styled.div`
  max-width: 102rem;
  margin: 8rem auto 5rem;
  padding: 3rem 5rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows.lg};
  border-radius: 0.5rem;
  display: flex;
`;

const Subtitle = styled.p`
  margin-top: 0;
  color: ${(props) => props.theme.colors.gray[600]};
  font-size: 1.4rem;
`;

function Contact() {
  return (
    <Section id="contact">
      <Content>
        <div>
          <div
            css={`
              margin-bottom: 3rem;
            `}
          >
            <h2
              css={`
                margin-bottom: 0.5rem;
              `}
            >
              Get in Touch
            </h2>
            <Subtitle>
              Send us a message and we will respond as soon as possible
            </Subtitle>
          </div>
          <Form />
        </div>
        <Info />
      </Content>
    </Section>
  );
}

export default Contact;
