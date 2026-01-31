import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SubmitButton from "./SubmitButton";

/**
 * ## 送信ボタンのコンポーネント
 *
 * - フォームの送信ボタンを提供するコンポーネントです。
 * - ボタンのサイズ、重要（危険）な操作かといった属性を設定できます。
 */
const meta = {
  component: SubmitButton,
  title: "components/button/SubmitButton",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ",
    },
    danger: {
      control: "boolean",
      description: "重要な（危険）な操作を行うボタンかどうか",
    },
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 小さいサイズのボタン
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "送信",
  },
};

/**
 * 中サイズのボタン
 */
export const Medium: Story = {
  args: {
    size: "md",
    children: "送信",
  },
};

/**
 * 大きいサイズのボタン
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "送信",
  },
};

/**
 * 重要（危険）な操作を行うボタン
 */
export const Danger: Story = {
  args: {
    size: "md",
    danger: true,
    children: "削除",
  },
};
