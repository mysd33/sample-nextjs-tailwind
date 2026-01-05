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

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

/**
 * ボタンの基底部品
 */
export default function BaseButton(props: ButtonProps) {
  const height = () => {
    switch (props.size) {
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

  const textSize = () => {
    switch (props.size) {
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

  const colorSet = () => {
    if (props.danger) {
      return "bg-red-600 hover:bg-red-700 text-white focus:border-red-400 focus:ring-red-300/50 ";
    }
    if (props.outline) {
      return "border border-blue-600 bg-white text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white focus:border-blue-400 focus:ring-blue-300/50 focus:bg-blue-600 focus:text-white";
    }
    return "bg-blue-600 hover:bg-blue-700 text-white focus:border-blue-400 focus:ring-blue-300/50";
  };

  return (
    <button
      {...props}
      className={`rounded-md px-3 focus:ring-3 focus:outline-hidden disabled:opacity-50 ${height()} ${textSize()} ${colorSet()} ${props.className}`}>
      {props.children}
    </button>
  );
}
