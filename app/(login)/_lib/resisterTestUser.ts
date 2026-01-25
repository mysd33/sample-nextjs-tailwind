import { authClient } from "@/lib/auth-client";
import { User } from "@/lib/common/models/user";

export async function register(): Promise<void> {
  // テスト用のログインユーザ情報
  const dummyLoginUsers: User[] = [
    {
      id: "yamada@xxx.co.jp",
      name: "山田太郎",
      birthday: new Date("1990-01-01"),
      password: "password",
      isAdmin: true,
    },
    {
      id: "tamura@xxx.co.jp",
      name: "田村一郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
  ];

  // Sign Upで、2人のテストユーザを登録する
  await Promise.all(
    dummyLoginUsers.map(async (user) => {
      const { error } = await authClient.signUp.email({
        email: user.id,
        password: user.password!,
        name: user.name,
      });
      if (error) {
        if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
          throw new Error("テストユーザは登録済です。");
        }
        throw new Error(`想定外のエラーです。[${error.code}]${error.message}`);
      } else {
        console.log(`ユーザ登録成功(${user.id})`);
      }
    }),
  );
}
