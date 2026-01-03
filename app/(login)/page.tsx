import TableArea from "@/components/table/TableArea";
import LoginFormViewPart from "./_components/LoginFormViewPart";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableDataCol from "@/components/table/TableDataCol";

/**
 * ログイン画面
 * @returns
 */
export default function LoginView() {
  return (
    <>
      {/* ログインフォーム部分（クライアントコンポーネント） */}
      <LoginFormViewPart />
      {/* テストユーザを表示するテーブル */}
      <div className="mx-auto max-w-120">
        <p className="mt-5 mb-2">※テストユーザでログインできます</p>
        <TableArea
          thead={
            <TableHeaderRow>
              <TableHeaderCol>ユーザID</TableHeaderCol>
              <TableHeaderCol>ユーザ名</TableHeaderCol>
              <TableHeaderCol>パスワード</TableHeaderCol>
              <TableHeaderCol>管理者</TableHeaderCol>
            </TableHeaderRow>
          }
          tbody={
            <>
              <TableDataRow>
                <TableDataCol>yamada@xxx.co.jp</TableDataCol>
                <TableDataCol>山田太郎</TableDataCol>
                <TableDataCol>password</TableDataCol>
                <TableDataCol>○</TableDataCol>
              </TableDataRow>
              <TableDataRow>
                <TableDataCol>tamura@xxx.co.jp</TableDataCol>
                <TableDataCol>田村一郎</TableDataCol>
                <TableDataCol>password</TableDataCol>
                <TableDataCol>-</TableDataCol>
              </TableDataRow>
            </>
          }
        />
      </div>
    </>
  );
}
