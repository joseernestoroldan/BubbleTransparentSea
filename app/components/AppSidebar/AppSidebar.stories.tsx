import type { Meta, StoryObj } from '@storybook/react';

import { AppSidebar } from './AppSidebar';

const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
};

export default meta;
type Story = StoryObj<typeof AppSidebar>;

export const Primary: Story = {
  args: {
  },
};