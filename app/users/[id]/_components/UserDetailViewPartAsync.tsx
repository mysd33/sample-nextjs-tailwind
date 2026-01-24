import { User } from "@/lib/common/models/user";
import UserDeletedFallbackDialog from "./UserDeletedFallback";
import UserDetailClientViewPart from "./UserDetailClientViewPart";

export default async function UserDetailViewPartAsync({
  userPromise,
}: {
  userPromise: Promise<User | null>;
}) {
  const user = await userPromise;
  if (!user) {
    /*
     * ユーザ削除後に表示するフォールバックダイアログ
     * ユーザ情報削除すると詳細画面の更新が走ってしまい、表示できる情報がなくなるため、Fallbackとしてダイアログを表示する。
     */
    return <UserDeletedFallbackDialog />;
  }
  return <UserDetailClientViewPart userProps={user} />;
}
