import BaseButton, { BaseButtonProps } from "./BaseButton";

type ButtonProps = Omit<BaseButtonProps, "outline">;

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
