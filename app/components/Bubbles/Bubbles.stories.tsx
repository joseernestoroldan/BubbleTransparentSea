import type { Meta, StoryObj } from '@storybook/react';

import { Bubbles } from './Bubbles';

const meta: Meta<typeof Bubbles> = {
  component: Bubbles,
};

export default meta;
type Story = StoryObj<typeof Bubbles>;

export const Primary: Story = {
  args: {
     
  },
};