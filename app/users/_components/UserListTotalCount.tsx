import { User } from "@/lib/common/models/user";
import { Page } from "@/lib/common/server-pagination/serverPagination";

export default async function UserListTotalCount({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const totalElements = (await userPage).totalElements;
  return <span>合計: {totalElements} 件</span>;
}
