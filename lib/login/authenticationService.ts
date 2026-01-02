"use server";

/**
 * ログイン処理
 * @param id ユーザID
 * @param password パスワード
 */
export async function login(id: string, password: string): Promise<void> {
  console.log("Server Action: login", { id, password });
}
