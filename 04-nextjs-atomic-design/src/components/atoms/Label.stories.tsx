import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'ラベル',
  },
};

export const WithHtmlFor: Story = {
  args: {
    children: 'ユーザー名',
    htmlFor: 'username',
  },
};

export const LongLabel: Story = {
  args: {
    children: 'これはとても長いラベルの例です',
  },
}; 