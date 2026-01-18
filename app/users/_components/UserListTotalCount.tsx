import { Page } from "@/components/pagination/pagination";
import { User } from "@/lib/common/models/user";

export default async function UserListTotalCount({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const totalElements = (await userPage).totalElements;
  return <span>合計: {totalElements} 件</span>;
}
