import BaseButton from "@/components/button/BaseButton";
import ButtonArea from "@/components/button/ButtonArea";
import LinkButton from "@/components/button/LinkButton";
import LoadingSpinnerIcon from "@/components/icons/LodingSpinnerIcon";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { Pageable } from "@/components/pagination/pagination";
import TableArea from "@/components/table/TableArea";
import TableDataCol from "@/components/table/TableDataCol";
import TableDataRow from "@/components/table/TableDataRow";
import TableHeaderCol from "@/components/table/TableHeaderCol";
import TableHeaderRow from "@/components/table/TableHeaderRow";
import { UserService } from "@/lib/users/services/userService";
import { Metadata } from "next";
import { Suspense } from "react";

import PaginationViewPart from "./_components/PaginationViewPart";
import UserListTableDataRows from "./_components/UserListTableDataRows";
import UserListTotalCount from "./_components/UserListTotalCount";

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
  console.log(`UserListView: pageNumber=${pageNumber}, pageSize=${pageSize}`);

  // サービスクラス（ビジネスロジック）を呼び出しユーザ情報の取得
  const userPagePromise = UserService.getInstance().findAllForPagination(
    new Pageable(pageSize, pageNumber),
  );

  // もしコメント外すと、ページ全体の初期表示処理でawaitするので、loading.tsxでSuspenseによるページ全体のローディング画面表示になる
  //await userPage;

  return (
    <>
      <HeaderArea title={title}>
        <LinkButton outline={true} forwardViewURL="/menu">
          メニューに戻る
        </LinkButton>
      </HeaderArea>
      <MainContainer>
        {/* ユーザ一覧部分 ここだけは、サーバレンダリングですぐに表示させる */}
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
              {/* サーバでのStreamingによるレンダリング */}
              <Suspense
                fallback={
                  <TableDataRow>
                    <TableDataCol colSpan={7} className="text-center">
                      <LoadingSpinnerIcon />
                    </TableDataCol>
                  </TableDataRow>
                }>
                <UserListTableDataRows userPage={userPagePromise} />
              </Suspense>
            </>
          }
        />
        {/* サーバでのStreamingによるレンダリング */}
        <Suspense fallback={""}>
          {/* ページネーション部分*/}
          <PaginationViewPart userPage={userPagePromise} />
        </Suspense>
        <div className="my-2 text-left">
          {/* サーバでのStreamingによるレンダリング */}
          <Suspense fallback={""}>
            {/* 総件数部分*/}
            <UserListTotalCount userPage={userPagePromise} />
          </Suspense>
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
