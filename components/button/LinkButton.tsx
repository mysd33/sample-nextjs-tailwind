// クリック時の処理はクライアントのみで動作するため"use client"を指定
"use client";

import BaseButton from "./BaseButton";
import { useRouter } from "next/navigation";

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
   * ボタンのサイズ（sm, md, lg）
   */
  size?: "sm" | "md" | "lg" | undefined;
  /**
   * クラス名
   */
  className?: string;
  /**
   * ボタンに表示する子要素(children)
   */
  children: React.ReactNode;
}

export default function LinkButton({
  forwardViewURL = "",
  outline = false,
  disabled = false,
  size,
  className,
  children,
}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(forwardViewURL);
  };

  return (
    <BaseButton
      disabled={disabled}
      outline={outline}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
    </BaseButton>
  );
}
