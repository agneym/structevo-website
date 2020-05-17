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
    href: "/contact",
    text: "Contact",
  },
];

const ListItem = styled.li``;

function NavLinks() {
  return (
    <NakedList>
      {links.map((link) => {
        return (
          <ListItem>
            <Link href={link.href}>{link.text}</Link>
          </ListItem>
        );
      })}
    </NakedList>
  );
}

export default NavLinks;
