"use server";

import { redirect } from "next/navigation";
import { AuthenticationService } from "./services/authenticationService";

/**
 * ログイン処理
 * @param id ユーザID
 * @param password パスワード
 */
export async function login(id: string, password: string): Promise<void> {
  console.log("Server Action: login", { id, password });
  // ビジネスロジックの呼び出し
  await AuthenticationService.getInstance().login(id, password);

  // ログイン成功時にはメニュー画面へ遷移
  redirect("/menu");
}
