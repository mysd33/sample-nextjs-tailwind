import LinkButton from "@/components/button/LinkButton";
import TableArea from "@/components/table/TableArea";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import { calcAge, formatDate } from "@/lib/common/utils/dateUtils";
import PaginationViewPart from "./_components/PaginationViewPart";
import { UserService } from "@/lib/users/services/userService";
import { Pageable } from "@/lib/common/server-pagination/serverPagination";

/**
 * ユーザ一覧画面
 */
export default async function UserListView({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // TODO: クエリパラメータよりページ数とページサイズの取得
  const params = await searchParams;
  const pageSize = params.pageSize ? Number(params.pageSize) : 5;
  // 現在ページ数
  const pageNumber = params.pageNumber ? Number(params.pageNumber) : 0;

  // ユーザ情報の取得
  const userPage = UserService.getInstance().findAllForPageNation(
    new Pageable(pageSize, pageNumber),
  );
  const users = (await userPage).content;
  const totalElements = (await userPage).totalElements;

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
      {/* ページネーション部分（クライアントコンポーネント） */}
      <PaginationViewPart
        pageSize={pageSize}
        pageNumber={pageNumber}
        totalElements={totalElements}
      />

      <div className="my-2 text-left">
        <label>合計: {totalElements} 件</label>
      </div>
      <br />
    </>
  );
}
