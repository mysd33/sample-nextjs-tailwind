import PaginationLink from "@/components/pagination/PaginationLink";
import { Page } from "@/components/pagination/pagination";
import { User } from "@/lib/common/models/user";

/**
 * いったんサーバ側でStreaming対応させるようにするためのasync/awaitするページネーション部分コンポーネント
 */
export default async function PaginationViewPartAsync({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const page = await userPage;
  // ページネーション部分（クライアントコンポーネント）
  return (
    <PaginationLink
      page={page}
      forwardViewURL="/users"
      pageNumberParamName="pageNumber"
      pageSizeParamName="pageSize"
    />
  );
}
