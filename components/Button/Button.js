import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const colors = {
  primary: "#06ba41",
};

const ButtonContainer = styled(motion.button)`
  appearance: none;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  border: none;
  box-shadow: ${(props) => props.theme.shadows.sm};
  padding: 1rem 1.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.sm};
  }

  &:focus {
    box-shadow: ${(props) => props.theme.shadows.outline};
  }
`;

function Button({ children, ...rest }) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
}

export default Button;
