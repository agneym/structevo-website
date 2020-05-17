import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1.4rem 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1.3rem;
`;

const InputEl = styled.input`
  background-color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid ${(props) => props.theme.colors.gray[400]};
  padding: 1rem 0.8rem;
  border-radius: 0.5rem;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1.4rem;

  &:focus {
    box-shadow: ${(props) => props.theme.shadows.outline};
  }
`;

function Input({ id, labelText, value, onChange, className, ...rest }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };
  return (
    <Container className={className}>
      <Label htmlFor={id}>{labelText}</Label>
      <InputEl
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </Container>
  );
}

export default Input;
