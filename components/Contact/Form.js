import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import TextArea from "./TextArea";
import Button from "../Button";

const FormContainer = styled.form`
  width: 100%;
  grid-column-start: 3;
  grid-column-end: 5;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 2rem;
`;

const SendButton = styled(Button)`
  display: block;
  margin: 1rem auto;
  font-size: 1.5rem;
  padding: 1.2rem 1.4rem;
`;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <FormContainer>
      <InputGrid>
        <Input
          id="name"
          placeholder="John Doe"
          labelText="Name"
          value={name}
          onChange={setName}
        />
        <Input
          id="email"
          placeholder="johndoe@email.com"
          labelText="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          id="mobile"
          placeholder="10 Digit Mobile number"
          labelText="Mobile"
          value={mobile}
          onChange={setMobile}
        />
        <Input
          id="subject"
          labelText="Subject"
          value={subject}
          placeholder="Subject line"
          onChange={setSubject}
        />
      </InputGrid>
      <TextArea
        id="message"
        labelText="Message"
        value={message}
        placeholder="Add your message here"
        onChange={setMessage}
      />
      <SendButton type="submit">Send Message</SendButton>
    </FormContainer>
  );
}

export default Form;
