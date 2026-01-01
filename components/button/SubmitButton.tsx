import BaseButton from "./BaseButton";

interface Props {
  /**
   * ボタンのサイズ（sm, md, lg）
   */
  size?: "sm" | "md" | "lg" | undefined;
  /**
   * 重要な（危険）な操作を行うボタンかどうか
   */
  danger?: boolean;
  /*
   * ボタンが無効かどうか
   */
  disabled?: boolean;
}

export default function SubmitButton({
  props,
  children,
}: {
  props?: Props;
  children: React.ReactNode;
}) {
  return (
    <BaseButton props={{ ...props, type: "submit" }}>{children} </BaseButton>
  );
}
