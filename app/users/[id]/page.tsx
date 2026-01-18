import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import LoadingSuspenceFallback from "@/components/suspence/LoadingSuspenceFallback";
import { UserService } from "@/lib/users/services/userService";
import { Metadata } from "next";
import { Suspense } from "react";
import UserDetailViewPartAsync from "./_components/UserDetailViewPartAsync";

// タイトル等のページごとのメタデータの設定
const title = "ユーザ詳細";
export const metadata: Metadata = {
  title: title,
};

/**
 * ユーザ詳細画面
 */
export default async function UserDetailView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //サンプルAPの都合上、idをメールアドレスにしており、「@」（「%40」として受け取る）を含むため、URLデコードする
  const decodedId = decodeURIComponent(id);

  // TODO: サーバからユーザデータを取得する
  // ダミーとしてスリープ処理（動作確認用）
  const userPromise = UserService.getInstance().findOne(decodedId);

  return (
    <>
      <HeaderArea title={title}>
        <LinkButton outline={true} forwardViewURL="/users">
          ユーザ一覧に戻る
        </LinkButton>
      </HeaderArea>
      <MainContainer>
        {/* ユーザ詳細フォーム部分（クライアントコンポーネント） */}
        <Suspense fallback={<LoadingSuspenceFallback />}>
          <UserDetailViewPartAsync userPromise={userPromise} />
        </Suspense>
      </MainContainer>
    </>
  );
}
