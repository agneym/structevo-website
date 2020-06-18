import React from "react";
import styled from "styled-components";
import Link from "next/link";

import NakedList from "../NakedList";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/#about",
    text: "About",
  },
  {
    href: "/",
    text: "Services",
  },
  {
    href: "",
    text: "Projects",
  },
  {
    href: "/#contact",
    text: "Contact",
  },
];

const List = styled(NakedList)`
  display: flex;
`;

const ListItem = styled.li`
  margin: 0 1.5rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.heading};
  letter-spacing: 0.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  transition: color 0.2s ease-out;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function NavLinks() {
  return (
    <List>
      {links.map((link) => {
        return (
          <ListItem key={link.text}>
            <Link href={link.href}>
              <a>{link.text}</a>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavLinks;
