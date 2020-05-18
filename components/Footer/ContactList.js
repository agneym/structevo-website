import React from "react";
import styled from "styled-components";
import Social from "../Social";

const Header = styled.header`
  margin-bottom: 1.5rem;
`;

const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  margin-bottom: 0.1rem;
`;

const Subtitle = styled.sub`
  color: ${(props) => props.theme.colors.gray[500]};
`;

function ContactList({ heading }) {
  return (
    <div>
      <Header>
        <Heading>{heading}</Heading>
        <Subtitle>
          You can find us on these platforms. <br />
          We reply in 1-2 business days
        </Subtitle>
      </Header>
      <Social />
    </div>
  );
}

export default ContactList;
