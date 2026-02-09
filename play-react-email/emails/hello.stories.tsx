import type { Meta, StoryObj } from "@storybook/react-vite";
import { HelloEmail } from "./hello";

const meta = {
  title: "Emails/HelloEmail",
  component: HelloEmail,
} satisfies Meta<typeof HelloEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "田中太郎",
    message: "アカウントが作成されました。下のボタンからログインしてください。",
    buttonText: "ログイン",
    buttonUrl: "https://example.com/login",
  },
};

export const Welcome: Story = {
  args: {
    name: "John",
    message: "Welcome to our service! Click below to get started.",
    buttonText: "Get Started",
    buttonUrl: "https://example.com/start",
  },
};
