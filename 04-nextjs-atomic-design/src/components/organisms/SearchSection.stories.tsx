import type { Meta, StoryObj } from '@storybook/react';
import SearchSection from './SearchSection';

const meta: Meta<typeof SearchSection> = {
  title: 'Organisms/SearchSection',
  component: SearchSection,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SearchSection>;

export const Default: Story = {}; 