import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import TableArea from "@/components/table/TableArea";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import LoginFormViewPart from "./_components/LoginFormViewPart";

/**
 * ログイン画面
 */
export default function LoginView() {
  return (
    <>
      <HeaderArea title="TODO管理アプリ" />
      <MainContainer>
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
      </MainContainer>
    </>
  );
}
