import { Page } from "@/components/pagination/pagination";
import { User } from "@/lib/common/models/user";

export default async function UserListTotalCountAsync({
  userPage,
}: {
  userPage: Promise<Page<User>>;
}) {
  const totalElements = (await userPage).totalElements;
  return <>{totalElements} </>;
}
