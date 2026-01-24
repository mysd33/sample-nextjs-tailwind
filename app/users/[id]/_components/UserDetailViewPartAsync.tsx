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
    return <UserDeletedFallbackDialog />;
  }
  return <UserDetailClientViewPart userProps={user} />;
}
