import type { Meta, StoryObj } from '@storybook/react';

import { SidebarNav } from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
  component: SidebarNav,
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

export const Primary: Story = {
  args: {
  },
};