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
export default function LinkButton(props: LinkButtonProps) {
  if (!props.href) {
    return (
      <span
        className={`${buildBaseButtonClassName({ size: props.size, outline: props.outline, danger: props.danger, className: props.className })} pointer-events-none opacity-60`}
        aria-disabled="true">
        {props.children}
      </span>
    );
  }

  /* buttonとaタグの違いが出てしまうのため、BaseButtonとclassNameのロジックのみを共通化 */
  const buttonClassName = buildBaseButtonClassName({
    size: props.size,
    outline: props.outline,
    danger: props.danger,
    className: props.className,
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
      <Link {...props} className={buttonClassName}>
        {props.children}
      </Link>
    </>
  );
}
