"use server";
import { UserRegistrationFormInput } from "@/app/users/_lib/userRegistrationFormInput";
import { revalidatePath } from "next/cache";
import { UserService } from "./services/userService";

/**
 * ユーザの登録処理
 * @param user
 *
 */
export async function registerUser(
  user: UserRegistrationFormInput,
): Promise<void> {
  console.log("Server Action: registerUser", { user });
  // ビジネスロジックの呼び出し
  await UserService.getInstance().create({
    id: user.userId,
    name: user.userName,
    password: user.password,
    confirmPassword: user.confirmPassword,
    birthday: new Date(user.birthday),
    isAdmin: user.isAdmin ?? false,
  });
  // ユーザ登録したため詳細画面の再評価
  revalidatePath("/users");
}

/**
 * ユーザの更新処理
 * @param user
 */
export async function updateUser(
  user: UserRegistrationFormInput,
): Promise<void> {
  console.log("Server Action: updateUser", { user });
  // ビジネスロジックの呼び出し
  await UserService.getInstance().update({
    id: user.userId,
    name: user.userName,
    password: user.password,
    confirmPassword: user.confirmPassword,
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
