import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    prefixIcon: {
      control: false
    },
    suffixIcon: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'medium',
    color: 'primary',
    rounded: false,
    compacted: false
  }
};

export const CTA: Story = {
  args: {
    children: 'Button',
    variant: 'cta',
    color: 'primary',
    rounded: false
  }
};

export const Toggle: Story = {
  args: {
    children: 'Button',
    variant: 'toggle',
    size: 'medium',
    color: 'primary',
    selected: false,
    rounded: false,
    compacted: false
  }
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    size: 'medium',
    color: 'primary'
  }
};

export const ToggleText: Story = {
  args: {
    children: 'Button',
    variant: 'toggleText',
    size: 'medium',
    color: 'primary',
    selected: false
  }
};
