import { User } from "@/lib/common/models/user";
import UserDetailViewPart from "./UserDetailViewPart";

export default async function UserDetailViewPartAsync({
  userPromise,
}: {
  userPromise: Promise<User | null>;
}) {
  const user = await userPromise;
  return <>{user && <UserDetailViewPart userProps={user!} />}</>;
}
