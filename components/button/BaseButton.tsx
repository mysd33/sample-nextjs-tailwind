interface Props {
  /**
   * ボタンのサイズ（sm, md, lg）
   */
  size?: "sm" | "md" | "lg" | undefined;
  /**
   * アウトラインボタンかどうか
   */
  outline?: boolean;
  /**
   * 重要な（危険）な操作を行うボタンかどうか
   */
  danger?: boolean;
}

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Props;

type ButtonStyleOptions = Pick<Props, "size" | "outline" | "danger"> & {
  className?: string;
};

const height = (size: Props["size"]) => {
  switch (size) {
    case "sm":
      return "h-8";
    case "md":
      return "h-10";
    case "lg":
      return "h-12";
    default:
      return "h-10";
  }
};

const textSize = (size: Props["size"]) => {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-md";
    case "lg":
      return "text-xl";
    default:
      return "text-md";
  }
};

const colorSet = ({ outline, danger }: ButtonStyleOptions) => {
  if (danger) {
    return "bg-red-600 hover:bg-red-700 text-white focus:border-red-400 focus:ring-red-300/50";
  }
  if (outline) {
    return "border border-blue-600 bg-white text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white focus:border-blue-400 focus:ring-blue-300/50 focus:bg-blue-600 focus:text-white";
  }
  return "bg-blue-600 hover:bg-blue-700 text-white focus:border-blue-400 focus:ring-blue-300/50";
};

/**
 * LinkButtonとBaseButtonで共通のボタンスタイルクラス名を構築するために使用する
 */
export const buildBaseButtonClassName = ({
  size,
  outline,
  danger,
  className,
}: ButtonStyleOptions) =>
  [
    "inline-flex items-center justify-center rounded-md px-3 focus:ring-3 focus:outline-hidden disabled:opacity-50",
    height(size),
    textSize(size),
    colorSet({ outline, danger }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

/**
 * ボタンの基底部品
 */
export default function BaseButton({
  size,
  outline,
  danger,
  className,
  children,
  ...rest
}: BaseButtonProps) {
  const buttonClassName = buildBaseButtonClassName({
    size,
    outline,
    danger,
    className,
  });

  return (
    <button {...rest} className={buttonClassName}>
      {children}
    </button>
  );
}
