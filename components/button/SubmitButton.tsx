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
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

/**
 * 送信ボタン
 */
export default function SubmitButton(props: ButtonProps) {
  return (
    <BaseButton {...props} type="submit">
      {props.children}
    </BaseButton>
  );
}
