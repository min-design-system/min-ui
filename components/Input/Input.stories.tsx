import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';
import Icon from '../Icon';

const meta = {
  title: 'Component/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    rounded: false,
    compacted: false,
    disabled: false,
    error: false,
    fullWidth: false,
    placeholder: '내용을 입력해 주세요.'
  }
};

export const WithIcon: Story = {
  args: {
    size: 'medium',
    rounded: false,
    compacted: false,
    disabled: false,
    error: false,
    fullWidth: false,
    placeholder: '내용을 입력해 주세요.',
    prefixIcon: <Icon name="circle" />,
    suffixIcon: <Icon name="circle" />
  }
};
