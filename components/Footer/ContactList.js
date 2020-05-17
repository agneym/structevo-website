import React from "react";
import styled from "styled-components";
import { Facebook, Youtube } from "react-feather";
import { motion } from "framer-motion";

const Header = styled.header`
  margin-bottom: 1.5rem;
`;

const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 0.1rem;
`;

const Subtitle = styled.sub`
  color: ${(props) => props.theme.colors.gray[500]};
`;

const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
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
`;

function ContactList({ heading }) {
  return (
    <div>
      <Header>
        <Heading>{heading}</Heading>
        <Subtitle>
          You can find us on these platforms. <br />
          We reply in 1-2 business days
        </Subtitle>
      </Header>
      <LinksList>
        <LinkLi>
          <CustomLink
            href="https://www.facebook.com/StructEvo/"
            target="_blank"
            aria-label="Facebook Page"
            whileHover={{ scale: 1.2 }}
          >
            <Facebook size={20} />
          </CustomLink>
        </LinkLi>
        <LinkLi>
          <CustomLink
            href="https://www.youtube.com/channel/UC2ngGVR5GuTYkXuJMJ1VCFg"
            target="_blank"
            aria-label="Youtube channel"
            whileHover={{ scale: 1.2 }}
          >
            <Youtube size={20} />
          </CustomLink>
        </LinkLi>
      </LinksList>
    </div>
  );
}

export default ContactList;
