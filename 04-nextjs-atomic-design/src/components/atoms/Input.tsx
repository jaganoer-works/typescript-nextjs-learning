import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, id }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Input;
