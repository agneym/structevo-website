import React from "react";
import styled from "styled-components";
import { Headphones } from "react-feather";

const Content = styled.div`
  padding-right: 5rem;
  padding-top: 5rem;
`;

const Image = styled.img`
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows.lg};
  max-height: 60rem;
  justify-self: center;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
`;

const List = styled.ul`
  & > li {
    margin: 0.5rem 0;
  }
`;

const IconContainer = styled.div`
  color: ${(props) => props.theme.colors.green[500]};
  padding: 0.4rem;
`;

function FirstSection() {
  return (
    <>
      <Image src="/intro/done.jpeg" alt="" />
      <Content>
        <IconContainer>
          <Headphones />
        </IconContainer>
        <Heading>Get things done faster</Heading>
        <p>
          May Every fish forth heaven they're multiply him thing night rule
          waters god deep seed creepeth two our whose he seas beginning sixth
          above saying under deep darkness upon isn't rule open midst third
          greater, open have. Give signs his midst seasons
        </p>
        <List>
          <li>A space suit</li>
          <li>Micro-USB power cable</li>
          <li>Micro-USB to USB cable</li>
          <li>5V USB Power Banks</li>
          <li>
            A good first step is to stay at least 5' away from everyone and
            everything as much as possible as you descend to the surface of
            Mars.
          </li>
        </List>
      </Content>
    </>
  );
}

export default FirstSection;
