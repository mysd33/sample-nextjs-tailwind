import LinkButton from "./LinkButton";

interface Props {
  /**
   * 遷移先のURLパス
   */
  forwardViewURL?: string;
  /**
   * アウトラインボタンかどうか
   */
  outline?: boolean;
  /**
   * ボタンが無効かどうか
   */
  disabled?: boolean;
  /**
   * ボタンに表示する子要素(children)
   */
  children: React.ReactNode;
}

/**
 * メニューボタン
 */
export default function MenuButton({
  forwardViewURL = "",
  outline = false,
  disabled = false,
  children,
}: Props) {
  return (
    <LinkButton
      className="mt-12"
      size="lg"
      forwardViewURL={forwardViewURL}
      outline={outline}
      disabled={disabled}
    >
      {children}
    </LinkButton>
  );
}
