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
export default function LinkButton(props: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!props.forwardViewURL) {
      return;
    }
    router.push(props.forwardViewURL);
  };

  return (
    <BaseButton {...props} onClick={handleClick}>
      {props.children}
    </BaseButton>
  );
}
