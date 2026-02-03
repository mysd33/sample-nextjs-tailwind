import { buildBaseButtonClassName } from "@/components/button/BaseButton";
import Link from "next/link";

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

type LinkButtonProps = Props & React.ComponentProps<typeof Link>;

/**
 * リンクボタン
 */
export default function LinkButton({
  size,
  outline,
  danger,
  ...rest
}: LinkButtonProps) {
  if (!rest.href) {
    return (
      <span
        className={`${buildBaseButtonClassName({ size: size, outline: outline, danger: danger, className: rest.className })} pointer-events-none opacity-60`}
        aria-disabled="true">
        {rest.children}
      </span>
    );
  }

  /* buttonとaタグの違いが出てしまうのため、BaseButtonとclassNameのロジックのみを共通化 */
  const buttonClassName = buildBaseButtonClassName({
    size: size,
    outline: outline,
    danger: danger,
    className: rest.className,
  });

  /*
    aタグやButtonクリックによるRouter.pushを使用してしまうと、ページ全体がリロードされたり、
    サーバサイドの遷移処理の待ち時間の影響が直接でてしまうため、必ず、Linkを使用する。    
    Next.jsのLinkコンポーネントを使用して画面遷移を行う
    https://nextjs.org/learn/dashboard-app/navigating-between-pages
    https://nextjs.org/docs/app/getting-started/linking-and-navigating#prefetching

    これにより、条件にもよるが、特に静的なルートの場合はリンク先のページがあらかじめプリフェッチ
    （ユーザーがルートに移動する前にバックグラウンドでルートを読み込む）されるため
    アプリケーション内のルート間のナビゲーションが瞬時に感じられるようになる。
    
    クライアントサイド遷移により、    
    ページ全体をリロードすることなくlayout等共通のUI部分維持されて、個別のpageのみ遷移させることができる。      

    https://nextjs.org/docs/app/getting-started/linking-and-navigating#client-side-transitions
  */
  return (
    <>
      <Link {...rest} className={buttonClassName}>
        {rest.children}
      </Link>
    </>
  );
}
