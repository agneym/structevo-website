import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";

const Logo = styled.img`
  height: 14rem;
`;

const Section = styled.section`
  text-align: center;
`;

function InfoSection() {
  return (
    <Section>
      <Logo src={logo} alt="Structevo logo" />
    </Section>
  );
}

export default InfoSection;
