import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.gray[900]};
  padding: 1.2rem 4rem 0.5rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 6rem;
`;

function Navbar() {
  return (
    <Nav>
      <div>
        <Logo src="/logo.png" alt="Structevo" />
      </div>
      <NavLinks />
    </Nav>
  );
}

export default Navbar;
