import BaseButton from "@/components/button/BaseButton";
import ButtonArea from "@/components/button/ButtonArea";
import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import TableArea from "@/components/table/TableArea";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import { Pageable } from "@/lib/common/server-pagination/serverPagination";
import { calcAge, formatDate } from "@/lib/common/utils/dateUtils";
import { UserService } from "@/lib/users/services/userService";
import { Metadata } from "next";
import PaginationViewPart from "./_components/PaginationViewPart";

// タイトル等のページごとのメタデータの設定
const title = "ユーザ管理";
export const metadata: Metadata = {
  title: title,
};

/**
 * ユーザ一覧画面
 */
export default async function UserListView({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // クエリパラメータよりページ数とページサイズの取得
  const params = await searchParams;
  const pageNumber = params.pageNumber ? Number(params.pageNumber) : 0;
  const pageSize = params.pageSize ? Number(params.pageSize) : 5;

  // ユーザ情報の取得
  const userPage = UserService.getInstance().findAllForPageNation(
    new Pageable(pageSize, pageNumber),
  );
  const users = (await userPage).content;
  const totalElements = (await userPage).totalElements;

  return (
    <>
      <HeaderArea title={title}>
        <LinkButton outline={true} forwardViewURL="/menu">
          メニューに戻る
        </LinkButton>
      </HeaderArea>
      <MainContainer>
        {/* ユーザ一覧部分 */}
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
          <span>合計: {totalElements} 件</span>
        </div>
        <br />
        <ButtonArea>
          {/* TODO: CSV出力は未実装 */}
          <BaseButton>CSV出力</BaseButton>
          <LinkButton forwardViewURL="users/newuser">新規ユーザ登録</LinkButton>
        </ButtonArea>
      </MainContainer>
    </>
  );
}
