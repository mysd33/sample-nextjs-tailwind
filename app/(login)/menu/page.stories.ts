import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MenuView from "./page";

/**
 * ## メニュー画面
 *
 */
const meta = {
  component: MenuView,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuView>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * メニュー画面の表示
 */
export const Default: Story = {
  args: {},
};
