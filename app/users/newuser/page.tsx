import { Metadata } from "next";
import UserRegistrationViewPart from "./_components/UserRegistrationViewPart";

// タイトル等のページごとのメタデータの設定
const title = "ユーザ登録";
export const metadata: Metadata = {
  title: title,
};

/**
 * ユーザ登録画面
 */
export default function UserRegistrationView() {
  return (
    <>
      {/* ユーザ登録フォーム部分（クライアントコンポーネント） */}
      <UserRegistrationViewPart title={title} />
    </>
  );
}
