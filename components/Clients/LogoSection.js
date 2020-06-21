import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-column: 2 / 5;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Content = styled.div`
  flex: 1 20%;
  margin: 4rem 1rem;
`;

const Image = styled.img`
  object-fit: contain;
  filter: grayscale(80%);
  opacity: 0.4;
  transition: filter 0.6s ease-out;
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const clientImages = [...new Array(8)].fill({
  src: `/clients/acme.png`,
});

function LogoSection() {
  return (
    <Container>
      {clientImages.map((clientImage, index) => {
        return (
          <Content key={index}>
            <Image src={clientImage.src} alt="" />
          </Content>
        );
      })}
    </Container>
  );
}

export default LogoSection;
