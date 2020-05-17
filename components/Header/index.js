import React from "react";
import styled from "styled-components";
import MainText from "./MainText";

const HeaderContainer = styled.header`
  height: calc(100vh - 7rem - 4rem);
  overflow-y: hidden;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: cover;
`;

function Header() {
  return (
    <HeaderContainer>
      <Image src="/carousel/placeholder.jpg" alt="Large house" load="lazy" />
      <Backdrop>
        <MainText />
      </Backdrop>
    </HeaderContainer>
  );
}

export default Header;