import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';
import Icon from '../Icon';

const meta = {
  title: 'Component/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    prefixIcon: {
      control: false
    },
    deleteIcon: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
    size: 'medium',
    color: 'default',
    disabled: false
  }
};

export const WithIcon: Story = {
  args: {
    children: 'Tag',
    size: 'medium',
    color: 'default',
    disabled: false,
    prefixIcon: <Icon name="circle" />
  }
};

export const WithDeleteIcon: Story = {
  args: {
    children: 'Tag',
    size: 'medium',
    color: 'default',
    disabled: false,
    prefixIcon: <Icon name="circle" />,
    deleteIcon: <Icon name="close" />
  }
};
