import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BaseButton from "./BaseButton";

/**
 * ## 基本のボタンのコンポーネント
 *
 */
const meta = {
  component: BaseButton,
  title: "components/button/BaseButton",
  tags: ["autodocs"],
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 小さいサイズのボタン
 */
export const Small: Story = {
  args: {
    type: "button",
    size: "sm",
    children: "実行",
  },
};

/**
 * 中サイズのボタン
 */
export const Medium: Story = {
  args: {
    type: "button",
    size: "md",
    children: "実行",
  },
};

/**
 * 大きいサイズのボタン
 */
export const Large: Story = {
  args: {
    type: "button",
    size: "lg",
    children: "実行",
  },
};

/**
 * アウトラインのボタン
 */
export const Outline: Story = {
  args: {
    type: "button",
    size: "md",
    outline: true,
    children: "戻る",
  },
};

/**
 * 重要（危険）な操作を行うボタン
 */
export const Danger: Story = {
  args: {
    type: "button",
    size: "md",
    danger: true,
    children: "削除",
  },
};
