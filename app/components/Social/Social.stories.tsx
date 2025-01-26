import type { Meta, StoryObj } from '@storybook/react';

import { Social } from './Social';

const meta: Meta<typeof Social> = {
  component: Social,
};

export default meta;
type Story = StoryObj<typeof Social>;

export const Primary: Story = {
  args: {
  },
};