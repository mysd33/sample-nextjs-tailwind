// クリック時の処理はクライアントのみで動作するため"use client"を指定
"use client";

import { buildBaseButtonClassName } from "@/components/button/BaseButton";
import Link from "next/link";

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

  /* buttonとaタグの違いが出てしまうのため、BaseButtonとclassNameのロジックのみを共通化 */
  const buttonClassName = buildBaseButtonClassName({
    size,
    outline,
    danger,
    className,
  });

  /*
    aタグやButtonクリックによるRouter.pushを使用してしまうと、ページ全体がリロードされたり、
    サーバサイドの遷移処理の待ち時間の影響が直接でてしまうため、必ず、Linkを使用する。    
    Next.jsのLinkコンポーネントを使用して画面遷移を行う
    https://nextjs.org/learn/dashboard-app/navigating-between-pages
    https://nextjs.org/docs/app/getting-started/linking-and-navigating
    
    これにより、条件にもよるが、リンク先のページがあらかじめプリフェッチ
    （ユーザーがルートに移動する前にバックグラウンドでルートを読み込む）されるため
    アプリケーション内のルート間のナビゲーションが瞬時に感じられるようになる。
    
    クライアントサイド遷移により、    
    ページ全体をリロードすることなくlayout等共通のUI部分維持されて、個別のpageのみ遷移させることができる。      

    https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions
  */
  return (
    <>
      <Link href={forwardViewURL} {...linkProps} className={buttonClassName}>
        {children}
      </Link>
    </>
  );
}
