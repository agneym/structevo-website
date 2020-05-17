import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 2.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  width: 20rem;
`;

function LogoSection() {
  return (
    <Container>
      <Image src="/full-logo.png" alt="" />
    </Container>
  );
}

export default LogoSection;
