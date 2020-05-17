import React, { useState } from "react";
import Input from "./Input";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [] = useState("");
  return (
    <form>
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
      <Input
        id="message"
        labelText="Message"
        value={message}
        placeholder="Add your message here"
        onChange={setMessage}
      />
    </form>
  );
}

export default Form;
