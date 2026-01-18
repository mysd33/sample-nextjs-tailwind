import { User } from "@/lib/common/models/user";
import UserDetailClientViewPart from "./UserDetailClientViewPart";

export default async function UserDetailViewPartAsync({
  userPromise,
}: {
  userPromise: Promise<User | null>;
}) {
  const user = await userPromise;
  return <>{user && <UserDetailClientViewPart userProps={user!} />}</>;
}
