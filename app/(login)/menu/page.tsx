import MenuButton from "@/components/button/MenuButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { Metadata } from "next";
import LogoutButtonClientViewPart from "./_components/LogoutButtonClientViewPart";

// タイトル等のページごとのメタデータの設定
const title = "TODO管理アプリ メニュー";
export const metadata: Metadata = {
  title: title,
};

/**
 * メニュー画面
 */
export default function MenuView() {
  return (
    <>
      <HeaderArea title={title} />
      <MainContainer>
        <div className="mx-auto flex flex-col">
          <MenuButton href="/todo">TODO管理</MenuButton>
          <MenuButton href="/todoFileUpload">TODO一括登録</MenuButton>
          {/* TODO: 管理者ユーザのみ表示するように修正 */}
          <MenuButton href="/users">ユーザ管理</MenuButton>
          {/* ログアウトボタン */}
          <LogoutButtonClientViewPart />
        </div>
      </MainContainer>
    </>
  );
}
