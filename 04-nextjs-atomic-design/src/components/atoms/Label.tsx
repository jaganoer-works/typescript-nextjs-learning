import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-medium text-gray-700">
      {children}
    </label>
  );
};

export default Label;
