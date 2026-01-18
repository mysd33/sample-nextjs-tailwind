import {
  Page as ClientPage,
  Pageable as ClientPageable,
} from "@/components/pagination/clientPagination";
import PaginationLink from "@/components/pagination/PaginationLink";
import { User } from "@/lib/common/models/user";
import { Page } from "@/lib/common/server-pagination/serverPagination";

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

  // TOOD: UserPageをそのまま渡せるようにデータ型の問題を戻していく
  const pageSize = page.pageSize;
  const pageNumber = page.pageNumber;

  // ページネーション部分（クライアントコンポーネント）
  return (
    <PaginationLink
      pageSize={pageSize}
      page={
        new ClientPage(
          new ClientPageable(pageSize, pageNumber),
          page.totalElements,
        )
      }
      forwardViewURL="/users"
      pageNumberParamName="pageNumber"
      pageSizeParamName="pageSize"
    />
  );
}
