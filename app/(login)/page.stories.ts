import { Meta, StoryObj } from "@storybook/nextjs-vite";
import LoginView from "./page";

/**
 * ## ログイン画面
 *
 */
const meta = {
  component: LoginView,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginView>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ログイン画面の表示
 */
export const Default: Story = {
  args: {},
};
