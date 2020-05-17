import React from "react";
import styled from "styled-components";
import { Umbrella } from "react-feather";

const Content = styled.div`
  padding-left: 7rem;
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

function SecondSection() {
  return (
    <>
      <Content>
        <IconContainer>
          <Umbrella />
        </IconContainer>
        <Heading>Get rid of queues</Heading>
        <p>
          Watering plants on the Titan Lakes, Curiosity uses a thermoelectric
          device to generate electricity. ChemCam measures the composition of
          the atmosphere and detects areas of windblown dust that could be dust
          devils. MSL, Curiosity, is designed to use several types of
          electronics, such as thermal, inertial and propulsion devices. NASA /
          JPL-Caltech / UA
        </p>
        <List>
          <li>NASA / JPL-Caltech / UA</li>
          <li>ESA / Rosetta / MPS for OSIRIS Team MPS</li>
          <li>UPD / LAM / IAA / SSO / INTA / UPM / DASP / IDA</li>
          <li>
            {" "}
            Emily Lakdawalla On February 3, Philae sent telemetry to Earth from
            an angle of 50 degrees, gathering important
          </li>
          <li>
            For example, the city of Austin, Texas is working on using rooftop
            solar thermal for cooling water at the 12-acre Central Air Pump
            Station.
          </li>
        </List>
      </Content>
      <Image src="/intro/house.jpg" alt="" />
    </>
  );
}

export default SecondSection;
