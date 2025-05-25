import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default LabeledInput; 