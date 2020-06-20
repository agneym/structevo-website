import React from "react";
import styled from "styled-components";

import LogoSection from "./LogoSection";
import LinksList from "./LinksList";
import TagsList from "./TagsList";
import ContactList from "./ContactList";

const Container = styled.footer`
  padding: 3rem 0 2.5rem 0;
  color: ${(props) => props.theme.colors.gray[400]};
`;

const Content = styled.div`
  margin: 0 6rem;
  display: grid;
  grid-template-columns: 50rem repeat(3, 1fr);
  grid-gap: 4rem;
`;

const usefulLinks = [
  {
    href: "#about",
    text: "About us",
  },
  {
    href: "",
    text: "Projects",
  },
  {
    href: "",
    text: "Services",
  },
  {
    href: "/#contact",
    text: "Contact us",
  },
];

const servicesList = [
  "Plans & Elevations",
  "3D Interior and Exterior Designs",
  "4K HD Walkthroughs",
  "Aerial Views",
  "360° Views and Panoramas",
  "Architectural Design Studio",
  "Construction",
];

function Footer() {
  return (
    <Container>
      <Content>
        <LogoSection />
        <LinksList heading="Useful Links" links={usefulLinks} />
        <TagsList
          heading="Services"
          tagsList={servicesList.map((service) => ({ text: service }))}
        />
        <ContactList heading="Follow us" />
      </Content>
    </Container>
  );
}

export default Footer;
