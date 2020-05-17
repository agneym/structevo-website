import styled from "styled-components";

const NakedList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  & > li::before {
    content: "\200B";
  }
`;

export default NakedList;
