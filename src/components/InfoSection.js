import React from "react";
import styled from "styled-components";
import { Facebook, Youtube } from "react-feather";

import logo from "../images/logo.png";
import media from "./media";

const Logo = styled.img`
  height: 18rem;
`;

const Section = styled.section`
  text-align: center;
  height: 100vh;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;

  ${media.phone} {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;

  a {
    display: block;
    margin: 0 2rem;
    color: inherit;
    transition: transform 225ms ease-in-out;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

function InfoSection() {
  return (
    <Section>
      <Logo src={logo} alt="Structevo logo" />
      <Text>Meanwhile consider visiting our other channels</Text>
      <LinkContainer>
        <a
          href="https://www.facebook.com/StructEvo/"
          target="_blank"
          aria-label="Facebook Page"
        >
          <Facebook size={35} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2ngGVR5GuTYkXuJMJ1VCFg"
          target="_blank"
          aria-label="Youtube channel"
        >
          <Youtube size={35} />
        </a>
      </LinkContainer>
    </Section>
  );
}

export default InfoSection;
