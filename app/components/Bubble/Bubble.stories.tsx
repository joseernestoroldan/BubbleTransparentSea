import type { Meta, StoryObj } from '@storybook/react';

import { Bubble } from './Bubble';

const meta: Meta<typeof Bubble> = {
  component: Bubble,
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Primary: Story = {
  args: {
     
  },
};