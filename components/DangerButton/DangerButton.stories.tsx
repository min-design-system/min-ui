import type { Meta, StoryObj } from '@storybook/react';

import Button from './DangerButton';

const meta = {
  title: 'Component/DangerButton',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};
