import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox',
    size: 'medium',
    checked: false,
    disabled: false
  }
};
