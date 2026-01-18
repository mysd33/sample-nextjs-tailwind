import PaginationLink from "@/components/pagination/PaginationLink";
import { Page } from "@/components/pagination/pagination";
import { User } from "@/lib/common/models/user";

/**
 * Streaming対応させるためasync/awaitするページネーション部分のコンポーネント
 */
export default async function PaginationViewPartAsync({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const page = await userPage;

  return (
    <>
      {/* 元々のPaginationLink */}
      <PaginationLink
        page={page}
        forwardViewURL="/users"
        pageNumberParamName="pageNumber"
        pageSizeParamName="pageSize"
      />
    </>
  );
}
