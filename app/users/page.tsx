import LinkButton from "@/components/button/LinkButton";
import TableArea from "@/components/table/TableArea";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import { User } from "@/lib/common/models/user";
import { calcAge, formatDate } from "@/lib/common/utils/dateUtils";

/**
 * ユーザ一覧画面
 */
export default function UserListView() {
  //TODO: ユーザ一覧表示するダミーデータ。Serviceから取得するように修正予定
  const users = [
    {
      id: "yamada@xxx.co.jp",
      name: "山田太郎",
      birthday: new Date("1990-01-01"),
      password: "password",
      isAdmin: true,
    },
    {
      id: "tamura@xxx.co.jp",
      name: "田村一郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
  ] as User[];

  return (
    <>
      <TableArea
        thead={
          <TableHeaderRow>
            <TableHeaderCol>No</TableHeaderCol>
            <TableHeaderCol>ユーザID</TableHeaderCol>
            <TableHeaderCol>ユーザ名</TableHeaderCol>
            <TableHeaderCol>誕生日</TableHeaderCol>
            <TableHeaderCol>年齢</TableHeaderCol>
            <TableHeaderCol>管理者</TableHeaderCol>
            <TableHeaderCol></TableHeaderCol>
          </TableHeaderRow>
        }
        tbody={
          <>
            {users.map((user, index) => (
              <TableDataRow key={user.id}>
                <TableDataCol>{index + 1}</TableDataCol>
                <TableDataCol>{user.id}</TableDataCol>
                <TableDataCol>{user.name}</TableDataCol>
                <TableDataCol>{formatDate(user.birthday)}</TableDataCol>
                <TableDataCol>{calcAge(user.birthday)}</TableDataCol>
                <TableDataCol>{user.isAdmin ? "○" : "-"}</TableDataCol>
                <TableDataCol>
                  <LinkButton forwardViewURL={`users/${user.id}`}>
                    詳細
                  </LinkButton>
                </TableDataCol>
              </TableDataRow>
            ))}
          </>
        }
      />
      {/* TODO: ページネーション機能は後で実装 */}
      <div className="my-2 text-left">
        {/* TODO: 合計件数は後で実装 */}
        <label>合計: {users.length} 件</label>
      </div>
      <br />
    </>
  );
}
