import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  margin: 4rem 0;
`;

const Image = styled.img`
  height: 3.5rem;
  width: 4rem;
  object-fit: contain;
`;

const Text = styled.p`
  text-transform: uppercase;
  line-height: 1.35;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-size: 1.6rem;
  margin-top: 0.4rem;
`;

function SpecItem({ image, children }) {
  return (
    <ListItem>
      <Image src={image} alt="" />
      <Text>{children}</Text>
    </ListItem>
  );
}

export default SpecItem;
