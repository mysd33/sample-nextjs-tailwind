"use server";
import { UserRegistrationFormInput } from "@/app/users/_lib/UserRegistrationFormInput";
import { revalidatePath } from "next/cache";
import { UserService } from "./services/userService";

/**
 * ユーザの更新処理
 */
export async function updateUser(
  user: UserRegistrationFormInput,
): Promise<void> {
  console.log("Server Action: updateUser", { user });
  // ビジネスロジックの呼び出し
  await UserService.getInstance().update({
    id: user.userId,
    password: user.password,
    confirmPassword: user.confirmPassword,
    name: user.userName,
    birthday: new Date(user.birthday),
    isAdmin: user.isAdmin ?? false,
  });
  // ユーザ更新したため詳細画面の再評価
  revalidatePath("/users");
}

/**
 * ユーザの削除処理
 * @param id ユーザID
 */
export async function deleteUser(id: string): Promise<void> {
  console.log("Server Action: deleteUser", { id });
  // ビジネスロジックの呼び出し
  await UserService.getInstance().delete(id);
  // ユーザ削除したため一覧画面の再評価
  revalidatePath("/users");
}
