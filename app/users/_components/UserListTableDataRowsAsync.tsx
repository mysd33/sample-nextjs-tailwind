import LinkButton from "@/components/button/LinkButton";
import { Page } from "@/components/pagination/pagination";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import { User } from "@/lib/common/models/user";
import { calcAge, formatDate } from "@/lib/common/utils/dateUtils";

// ユーザ情報の更新、削除後、クライアントキャッシュが利いてしまい、最新の情報が表示されない問題を回避するために、
// ユーザ一覧を常に動的にレンダリングする設定
// Streamingを使っているため、page.tsx側ではなく、ここで設定する必要がある
export const dynamic = "force-dynamic";

/**
 * ユーザ一覧のテーブルデータ行コンポーネント
 * Suspenseで非同期で表示できるようにする
 */
export default async function UserListTableDataRowsAsync({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const users = (await userPage).content;
  return (
    <>
      {users.length === 0 && (
        <TableDataRow>
          <TableDataCol colSpan={7} className="text-center">
            データが存在しません
          </TableDataCol>
        </TableDataRow>
      )}
      {users.map((user, index) => (
        <TableDataRow key={user.id}>
          <TableDataCol>{index + 1}</TableDataCol>
          <TableDataCol>{user.id}</TableDataCol>
          <TableDataCol>{user.name}</TableDataCol>
          <TableDataCol>{formatDate(user.birthday)}</TableDataCol>
          <TableDataCol>{calcAge(user.birthday)}</TableDataCol>
          <TableDataCol>{user.isAdmin ? "○" : "-"}</TableDataCol>
          <TableDataCol>
            <LinkButton href={`users/${user.id}`}>詳細</LinkButton>
          </TableDataCol>
        </TableDataRow>
      ))}
    </>
  );
}
