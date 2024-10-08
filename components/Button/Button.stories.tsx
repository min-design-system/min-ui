import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import Icon from '../Icon';

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
    compacted: false,
    disabled: false
  }
};

export const CTA: Story = {
  args: {
    children: 'Button',
    variant: 'cta',
    color: 'primary',
    rounded: false,
    disabled: false
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
    compacted: false,
    disabled: false
  }
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
    size: 'medium',
    color: 'primary',
    disabled: false
  }
};

export const ToggleText: Story = {
  args: {
    children: 'Button',
    variant: 'toggleText',
    size: 'medium',
    color: 'primary',
    selected: false,
    disabled: false
  }
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'medium',
    color: 'primary',
    rounded: false,
    compacted: false,
    disabled: false,
    prefixIcon: <Icon name="circle" />,
    suffixIcon: <Icon name="circle" />
  }
};

export const OnlyIcon: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    color: 'primary',
    rounded: false,
    compacted: false,
    disabled: false,
    prefixIcon: <Icon name="circle" />
  }
};
