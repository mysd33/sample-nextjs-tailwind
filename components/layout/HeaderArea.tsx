import LogoIcon from "../icons/LogoIcon";

// TODO: プロパティの定義方法
interface Props {
  /**
   * ヘッダのタイトル
   */
  title: string;
  /**
   * ログインユーザ情報を表示するか
   */
  showUser?: boolean;
}

export default function HeaderArea(props: Props) {
  return (
    <>
      <header className="flex flex-row bg-white p-5 shadow-md">
        <div className="flex">
          <LogoIcon />
          <h3 className="ml-2 text-2xl">{props.title}</h3>
        </div>
        <div className="relative ml-auto">
          ようこそ, <strong>XXXX</strong>さん!
        </div>
      </header>
    </>
  );
}
