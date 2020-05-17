import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  font-family: ${(props) => props.theme.fonts.heading};
`;

function MainText() {
  return (
    <div
      css={`
        text-align: center;
      `}
    >
      <Heading animate>Structevo</Heading>
      <Subtitle animate>Crafting Realities</Subtitle>
    </div>
  );
}

export default MainText;
