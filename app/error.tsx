"use client";

import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { useEffect } from "react";

/**
 * サーバサイドレンダリング処理やクライアント処理を挟まないサーバアクションでエラーが発生した場合に表示されるエラー画面
 * react hook formで作ったForm送信等はクライアント処理のhandleSubmitが挟まっているためか、この画面までたどり着かない。
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
        <LinkButton className="mt-3" forwardViewURL="/">
          トップページへ戻る
        </LinkButton>
      </MainContainer>
    </>
  );
}
