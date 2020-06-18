import React from "react";
import Link from "next/link";
import styled from "styled-components";

import NakedList from "../NakedList";

const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 1rem;
`;

const LinkContainer = styled.li`
  margin: 0.4rem 0;
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[300]};
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

function LinksList({ heading, links }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <NakedList>
        {links.map((link) => (
          <LinkContainer key={link.text}>
            <Link key={link.text} href={link.href}>
              <a>{link.text}</a>
            </Link>
          </LinkContainer>
        ))}
      </NakedList>
    </div>
  );
}

export default LinksList;
