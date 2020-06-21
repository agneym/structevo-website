import React from "react";
import styled from "styled-components";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 100%;
  transform-origin: center center;
`;

const Text = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  color: #ffffff;
  transition: opacity 0.8s ease-in;
`;

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;

  ${Image} {
    filter: brightness(70%);
    transition: filter 0.8s ease-out, transform 1.2s ease-out;
  }

  &:hover > ${Image} {
    filter: brightness(100%);
    transform: scale(1.3);
  }

  &:hover > ${Text} {
    opacity: 0;
  }
`;

function CarouselItem({ text, imageSrc }) {
  return (
    <Container>
      <Image src={imageSrc} alt="" />
      <Text>{text}</Text>
    </Container>
  );
}

export default CarouselItem;
