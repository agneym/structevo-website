import React from "react";
import styled from "styled-components";
import { Mail, Phone, Home } from "react-feather";

import NakedList from "../NakedList";
import Social from "../Social";

const Container = styled.div`
  position: relative;
  flex: 1;
  grid-column-start: 2;
`;

const Content = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.gray[800]};
  right: -8rem;
  top: 50%;
  transform: translateY(-65%);
  width: 90%;
  box-shadow: ${(props) => props.theme.shadows.xl};
  color: ${(props) => props.theme.colors.green[100]};
  padding: 1.5rem 3rem;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
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
      <Content>
        <Heading>Contact Us</Heading>
        <NakedList>
          <InfoItem icon={Mail}>structevo@gmail.com</InfoItem>
          <InfoItem icon={Phone}>+91 934934674</InfoItem>
          <InfoItem icon={Home}>
            1600 Pennsylvania Avenue NW, Washington, D.C. 20500, U.S.
          </InfoItem>
        </NakedList>
        <Social />
      </Content>
    </Container>
  );
}

export default Info;
