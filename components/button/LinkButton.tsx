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
   * ボタンのサイズ（sm, md, lg）
   */
  size?: "sm" | "md" | "lg" | undefined;
  /**
   * アウトラインボタンかどうか
   */
  outline?: boolean;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

/**
 * リンクボタン
 */
export default function LinkButton({ forwardViewURL, ...rest }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!forwardViewURL) {
      return;
    }
    router.push(forwardViewURL);
  };

  return (
    <BaseButton {...rest} onClick={handleClick}>
      {rest.children}
    </BaseButton>
  );
}
