import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Button from "../Button";

const Heading = styled(motion.h1)`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-size: 8rem;
  margin-bottom: 1rem;
  cursor: normal;
`;

const Subtitle = styled(motion.sub)`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
`;

const CtaButton = styled(Button)`
  font-size: 1.8rem;
  text-transform: uppercase;
  margin-top: 10rem;
  padding: 1.4rem 3rem;
  letter-spacing: -0.05rem;
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 200;
  background-color: ${(props) => props.theme.colors.green[500]};

  &:hover {
    background-color: ${(props) => props.theme.colors.green[600]};
  }
`;

function MainText() {
  return (
    <>
      <div
        css={`
          text-align: center;
        `}
      >
        <Heading animate>
          <span>Struct</span>
          <span
            css={`
              color: ${(props) => props.theme.colors.green[500]};
            `}
          >
            evo
          </span>
        </Heading>
        <Subtitle animate>Crafting Realities</Subtitle>
      </div>
      <CtaButton>Contact Us</CtaButton>
    </>
  );
}

export default MainText;
