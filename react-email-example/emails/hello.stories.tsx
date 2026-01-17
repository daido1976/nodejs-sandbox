import type { Meta, StoryObj } from "@storybook/react";
import { HelloEmail } from "./hello";

const meta = {
  title: "Emails/HelloEmail",
  component: HelloEmail,
  argTypes: {
    name: { control: "text" },
  },
} satisfies Meta<typeof HelloEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "World",
  },
};

export const WithCustomName: Story = {
  args: {
    name: "田中さん",
  },
};
