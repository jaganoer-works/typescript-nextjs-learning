import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SearchForm from './SearchForm';

const meta: Meta<typeof SearchForm> = {
  title: 'Molecules/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    onSearch: () => alert('検索ボタンが押されました'),
  },
};

export const WithButtonLabel: Story = {
  args: {
    value: '',
    onChange: () => {},
    onSearch: () => alert('検索！'),
    buttonLabel: 'Go',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <SearchForm
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        onSearch={() => alert(`検索ワード: ${value}`)}
      />
    );
  },
  args: {
    placeholder: '検索ワードを入力',
  },
}; 