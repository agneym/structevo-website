import React from "react";
import styled from "styled-components";

import LogoSection from "./LogoSection";

const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[700]};
  padding: 2rem 0 1.5rem 0;
  color: ${(props) => props.theme.colors.gray[400]};
`;

const Content = styled.div`
  margin: 0 6rem;
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
`;

function Footer() {
  return (
    <Container>
      <Content>
        <LogoSection />
      </Content>
    </Container>
  );
}

export default Footer;
