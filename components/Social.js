import React from "react";
import styled from "styled-components";
import { Facebook, Youtube } from "react-feather";
import { motion } from "framer-motion";

import NakedList from "./NakedList";

const LinksList = styled(NakedList)`
  display: flex;
`;

const LinkLi = styled.li`
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }
`;

const CustomLink = styled(motion.a)`
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.gray[300]};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

function Social() {
  return (
    <LinksList>
      <LinkLi>
        <CustomLink
          href="https://www.facebook.com/StructEvo/"
          target="_blank"
          aria-label="Facebook Page"
          title="Facebook Page"
          whileHover={{ scale: 1.1 }}
        >
          <Facebook size={20} />
        </CustomLink>
      </LinkLi>
      <LinkLi>
        <CustomLink
          href="https://www.youtube.com/channel/UC2ngGVR5GuTYkXuJMJ1VCFg"
          target="_blank"
          aria-label="Youtube channel"
          title="YouTube Channel"
          whileHover={{ scale: 1.1 }}
        >
          <Youtube size={20} />
        </CustomLink>
      </LinkLi>
    </LinksList>
  );
}

export default Social;
