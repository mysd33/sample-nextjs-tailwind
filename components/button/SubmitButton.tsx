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

  /**
   * クラス名
   *
   */
  className?: string;

  /**
   * ボタンに表示する子要素(children)
   */
  children: React.ReactNode;
}

export default function SubmitButton({
  size,
  danger,
  disabled,
  className,
  children,
}: Props) {
  return (
    <BaseButton
      type="submit"
      size={size}
      danger={danger}
      disabled={disabled}
      className={className}
    >
      {children}
    </BaseButton>
  );
}
