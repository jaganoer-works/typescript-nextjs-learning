import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 