import { User } from "@/lib/common/models/user";
import { Page } from "@/lib/common/server-pagination/serverPagination";
import PaginationViewPart from "./PaginationViewPart";

/**
 * いったんサーバ側でStreaming対応させるようにするためのページネーション部分コンポーネント
 * @param param0
 * @returns
 */
export default async function PaginationViewPartOnServer({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const page = await userPage;
  // サーバコンポーネントからクライアントコンポーネントは
  // プレーンオブジェクトか組み込みのデータ型しか渡せないので、Pageオブジェクトから必要な値を取り出して渡す
  const pageSize = page.pageSize;
  const pageNumber = page.pageNumber;
  const totalElements = page.totalElements;

  // ページネーション部分（クライアントコンポーネント）
  return (
    <PaginationViewPart
      pageSize={pageSize}
      pageNumber={pageNumber}
      totalElements={totalElements}
    />
  );
}
