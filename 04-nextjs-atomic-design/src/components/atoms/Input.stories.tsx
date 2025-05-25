import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
};

export const WithPlaceholder: Story = {
  args: {
    value: '',
    onChange: () => {},
    placeholder: '入力してください',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={e => setValue(e.target.value)} />;
  },
  args: {
    placeholder: '動的に入力',
  },
}; 