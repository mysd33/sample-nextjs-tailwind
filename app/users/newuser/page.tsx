import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { Metadata } from "next";
import UserRegistrationViewPart from "./_components/UserRegistrationClientViewPart";

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
      <HeaderArea title={title}>
        <LinkButton outline={true} forwardViewURL="/users">
          ユーザ一覧に戻る
        </LinkButton>
      </HeaderArea>
      <MainContainer>
        {/* ユーザ登録フォーム部分（クライアントコンポーネント） */}
        <UserRegistrationViewPart />
      </MainContainer>
    </>
  );
}
