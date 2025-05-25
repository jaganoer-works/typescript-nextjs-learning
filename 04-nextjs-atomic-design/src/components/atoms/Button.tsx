import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
