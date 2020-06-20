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

const InputEl = styled.textarea`
  background-color: ${(props) => props.theme.colors.gray[700]};
  color: ${(props) => props.theme.colors.white};
  border: 0.1rem solid ${(props) => props.theme.colors.gray[700]};
  padding: 1.4rem 1rem;
  border-radius: 1.2rem;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1.6rem;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;

function TextArea({ id, labelText, value, onChange, className, ...rest }) {
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
        rows={4}
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

export default TextArea;
