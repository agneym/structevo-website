import React from "react";

function Input({ id, labelText, value, onChange, className, ...rest }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };
  return (
    <div className={className}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
