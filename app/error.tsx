"use client";

import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { useEffect } from "react";

// Note: React hook formで作ったForm送信等でのエラー等、ボタンクリック時のイベントハンドラ中でのエラーとなる。
// error.tsxは、ErrorBoundaryの仕組みの一種のため、そのままだとこの画面までたどり着かない。
// useStateを使ってerrorをステート更新させて再レンダリングさせるように実装させる必要がある。
// @/lib/framework/errorboundary/useSafeErrorHandler を使用すると、簡単に実装できる。

/**
 * サーバサイドレンダリング処理やクライアント処理を挟まないサーバアクションでエラーが発生した場合に表示されるエラー画面
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <>
      <HeaderArea title="TODO管理" />
      <MainContainer>
        <div>
          {/* TODO: エラーコード */}
          <h1 className="text-2xl">システムエラーが発生しました</h1>
        </div>
        {/*
        <BaseButton onClick={() => reset()}>元のページへ戻る</BaseButton>
        */}
        <LinkButton className="mt-3" href="/">
          トップページへ戻る
        </LinkButton>
      </MainContainer>
    </>
  );
}
