interface Props {
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

/**
 * ボタン領域
 */
export default function ButtonArea({ children, className }: Props) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}
