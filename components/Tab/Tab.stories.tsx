import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Tab, { TabItem } from '.';

const meta = {
  title: 'Component/Tab',
  component: Tab,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = useState<string | number | undefined>('Tab1');

    const handleChange = (newValue?: string | number | undefined) => setValue(newValue);

    useEffect(() => {
      setValue(props?.value);
    }, [props?.value]);

    return (
      <div
        style={{
          width: props?.enableWide ? '300px' : undefined
        }}
      >
        <Tab {...props} onChange={handleChange} value={value}>
          <TabItem value="Tab1">Tab1</TabItem>
          <TabItem value="Tab2" showDot>
            Tab2
          </TabItem>
          <TabItem value="Tab3">Tab3</TabItem>
        </Tab>
      </div>
    );
  },
  args: {
    value: 'Tab1',
    enableWide: false
  }
};
