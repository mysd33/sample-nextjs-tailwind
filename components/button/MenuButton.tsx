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
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

/**
 * メニューボタン
 */
export default function MenuButton(props: ButtonProps) {
  return (
    <LinkButton {...props} className="mt-12" size="lg">
      {props.children}
    </LinkButton>
  );
}
