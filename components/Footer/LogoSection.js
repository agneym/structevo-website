import React from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  width: 20rem;
`;

function LogoSection() {
  return (
    <div>
      <Image src="/logo.png" alt="" />
    </div>
  );
}

export default LogoSection;
