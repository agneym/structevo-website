import React from "react";
import styled from "styled-components";

import NakedList from "../NakedList";

const List = styled(NakedList)`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 0.4rem 1.2rem;
  margin-left: 0rem;
  padding: 0.3rem 0.6rem;
  font-size: 1.4rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray[700]};
  border-radius: 0.5rem;
  cursor: default;

  &:hover {
    border: 0.1rem solid ${(props) => props.theme.colors.gray[600]};
  }

  &:first-child {
    padding-top: 0rem;
  }
`;

const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 1rem;
  padding-left: 0.6rem;
`;

function Tag({ children }) {
  return <ListItem>{children}</ListItem>;
}

function TagsList({ heading, tagsList }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <List>
        {tagsList.map((tag) => (
          <Tag key={tag.text}>{tag.text}</Tag>
        ))}
      </List>
    </div>
  );
}

export default TagsList;
