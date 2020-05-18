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
    href: "/",
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
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colors.white};

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.gray[400]};
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
          <ListItem>
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
