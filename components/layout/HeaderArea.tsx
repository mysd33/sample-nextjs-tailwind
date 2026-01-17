// TODO: ユーザ情報の部分のみClient Component化する
"use client";
import { usePathname } from "next/navigation";
import LogoIcon from "../icons/LogoIcon";

interface Props {
  /**
   * ヘッダのタイトル
   */
  title: string;
  /**
   * ログインユーザ情報を表示するか
   */
  showUser?: boolean;
  /**
   * 子要素
   */
  children?: React.ReactNode;
}

export default function HeaderArea(props: Props) {
  // TODO :ログイン済みユーザの管理ができるまでは、ダミーでトップページのパスかどうかを判定する。
  const pathName = usePathname();

  const inTopPage = pathName === "/";

  return (
    <>
      <header className="flex flex-row bg-white p-5 shadow-md">
        <div className="flex">
          <LogoIcon />
          <h3 className="ml-2 text-2xl">{props.title}</h3>
        </div>
        <div className="relative ml-auto">
          {/** TODO: ダミーでトップページのパスの場合だけ表示しない */}
          {!inTopPage && (
            <>
              {/** TODO: 動的にログイン済みユーザの情報を表示する */}
              <span>
                ようこそ, <strong>山田太郎</strong>さん!
              </span>
              <span className="ml-2">{props.children}</span>
            </>
          )}
        </div>
      </header>
    </>
  );
}
