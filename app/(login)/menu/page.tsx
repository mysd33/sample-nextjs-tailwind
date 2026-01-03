import MenuButton from "@/components/button/MenuButton";

/**
 * メニュー画面
 */
export default function MenuView() {
  return (
    <div className="mx-auto flex flex-col">
      <MenuButton forwardViewURL="/todo">TODO管理</MenuButton>
      <MenuButton forwardViewURL="/todoFileUpload">TODO一括登録</MenuButton>
      {/* TODO: 管理者ユーザのみ表示するように修正 */}
      <MenuButton forwardViewURL="/users">ユーザ管理</MenuButton>
      {/* TODO: ログアウト処理を実装するように修正 */}
      <MenuButton forwardViewURL="/">ログアウト</MenuButton>
    </div>
  );
}
