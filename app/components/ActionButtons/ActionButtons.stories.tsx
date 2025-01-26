import type { Meta, StoryObj } from '@storybook/react';

import { ActionButtons } from './ActionButtons';

const meta: Meta<typeof ActionButtons> = {
  component: ActionButtons,
};

export default meta;
type Story = StoryObj<typeof ActionButtons>;

export const Primary: Story = {
  args: {
     children: "Example Text",
  },
};