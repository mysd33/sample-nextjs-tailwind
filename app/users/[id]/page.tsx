import { Metadata } from "next";
import UserDetailViewPart from "./_components/UserDetailViewPart";

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
  {
    /* サンプルAPの都合上、idをメールアドレスにしていて@（%40として受け取る）を含むため、URLデコードする */
  }
  return <UserDetailViewPart title={title} id={decodeURIComponent(id)} />;
}
