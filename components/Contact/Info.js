import React from "react";
import styled from "styled-components";
import { Mail, Phone, Home } from "react-feather";

import NakedList from "../NakedList";
import Social from "../Social";

const Container = styled.div`
  flex: 1;
  grid-column-start: 2;
  color: ${(props) => props.theme.colors.gray[500]};
  padding-right: 1rem;
`;

const ListItem = styled.li`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  svg {
    vertical-align: middle;
  }
`;

function InfoItem({ icon: Icon, children }) {
  return (
    <ListItem>
      <span
        css={`
          margin-right: 1.5rem;
        `}
      >
        <Icon />
      </span>
      <span>{children}</span>
    </ListItem>
  );
}

function Info() {
  return (
    <Container>
      <NakedList>
        <InfoItem icon={Mail}>structevo@gmail.com</InfoItem>
        <InfoItem icon={Phone}>+91 934934674</InfoItem>
        <InfoItem icon={Home}>
          1600 Pennsylvania Avenue NW, Washington, D.C. 20500, U.S.
        </InfoItem>
      </NakedList>
      <Social />
    </Container>
  );
}

export default Info;
