import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";

const Logo = styled.img`
  height: 14rem;
`;

function InfoSection() {
  return (
    <section>
      <Logo src={logo} alt="Structevo logo" />
    </section>
  );
}

export default InfoSection;
