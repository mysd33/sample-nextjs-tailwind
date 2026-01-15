import LinkButton from "@/components/button/LinkButton";

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
   * 子要素
   */
  children: React.ReactNode;
}

/**
 * メニューボタン
 */
export default function MenuButton(props: Props) {
  return (
    <LinkButton {...props} className="mt-12" size="lg">
      {props.children}
    </LinkButton>
  );
}
