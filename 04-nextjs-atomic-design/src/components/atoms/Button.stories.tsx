import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'クリックして！',
    onClick: () => alert('クリックされました！'),
  },
};

export const CustomLabel: Story = {
  args: {
    children: '送信',
  },
}; 