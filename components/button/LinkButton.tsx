// クリック時の処理はクライアントのみで動作するため"use client"を指定
"use client";

import Link from "next/link";
import { buildBaseButtonClassName } from "@/components/button/BaseButton";

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
  /**
   * 重要な（危険）な操作を行うボタンかどうか
   */
  danger?: boolean;
}

type LinkButtonProps = Props &
  Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    className?: string;
    children: React.ReactNode;
  };

/**
 * リンクボタン
 */
export default function LinkButton({
  forwardViewURL,
  size,
  outline,
  danger,
  className,
  children,
  ...linkProps
}: LinkButtonProps) {
  if (!forwardViewURL) {
    return (
      <span
        className={`${buildBaseButtonClassName({ size, outline, danger, className })} pointer-events-none opacity-60`}
        aria-disabled="true">
        {children}
      </span>
    );
  }

  const buttonClassName = buildBaseButtonClassName({
    size,
    outline,
    danger,
    className,
  });

  return (
    <Link href={forwardViewURL} {...linkProps} className={buttonClassName}>
      {children}
    </Link>
  );
}
