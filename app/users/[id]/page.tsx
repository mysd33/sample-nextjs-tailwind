import { Metadata } from "next";
import UserDetailViewPart from "./_components/UserDetailViewPart";

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
  return (
    <>
      {/* ユーザ詳細フォーム部分（クライアントコンポーネント） */}
      <UserDetailViewPart title={title} id={decodedId} />
    </>
  );
}
