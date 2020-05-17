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
      <Input id="name" labelText="Name" value={name} onChange={setName} />
      <Input id="email" labelText="Email" value={email} onChange={setEmail} />
      <Input
        id="mobile"
        labelText="Mobile"
        value={mobile}
        onChange={setMobile}
      />
      <Input
        id="subject"
        labelText="Subject"
        value={subject}
        onChange={setSubject}
      />
      <Input
        id="message"
        labelText="Message"
        value={message}
        onChange={setMessage}
      />
    </form>
  );
}

export default Form;
