import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkContainer = styled.li`
  margin: 0.4rem 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[300]};

    &:hover {
      text-decoration: underline;
    }
  }
`;

function LinksList({ heading, links }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <List>
        {links.map((link) => (
          <LinkContainer>
            <Link href={link.href}>{link.text}</Link>
          </LinkContainer>
        ))}
      </List>
    </div>
  );
}

export default LinksList;
