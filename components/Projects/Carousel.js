import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import styled from "styled-components";
import { ArrowRightCircle, ArrowLeftCircle } from "react-feather";

import CarouselItem from "./CarouselItem";

const images = [
  {
    src: "/projects/1.jpg",
    text: "Architecture",
  },
  {
    src: "/projects/2.jpg",
    text: "Architecture",
  },
  {
    src: "/projects/3.jpg",
    text: "Architecture",
  },
  {
    src: "/projects/4.jpg",
    text: "Architecture",
  },
];

const Container = styled.div`
  position: relative;
`;

const ItemContainer = styled.div`
  height: 70rem;
`;

const StyledArrow = styled.div`
  position: absolute;
  height: 4rem;
  width: 4rem;
  color: ${(props) => props.theme.colors.primary};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 1.8rem;
`;

const Arrow = ({ icon: Icon }) => {
  return (
    <StyledArrow>
      <Icon />
    </StyledArrow>
  );
};

function CustomCarousel() {
  return (
    <Container>
      <Carousel slidesPerPage={4} infinite>
        {images.map((image, index) => {
          return (
            <ItemContainer key={index}>
              <CarouselItem
                imageSrc={image.src}
                text={image.text}
                key={index}
              />
            </ItemContainer>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default CustomCarousel;
