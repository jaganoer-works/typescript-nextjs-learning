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
    />
  );
};

export default Input; 