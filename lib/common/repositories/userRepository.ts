import { User } from "@/lib/common/models/user";

const sleepTime = 500;

/**
 * ユーザ情報を管理するRepositoryクラス
 */
export class UserRepository {
  private static instance: UserRepository;
  private constructor() {}

  /**
   * ユーザ情報を管理するRepositoryクラスのインスタンスを取得する
   * @returns ユーザ情報を管理するRepositoryクラスのインスタンス
   */
  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  /**
   * ユーザ認証する
   * @param id ユーザID
   * @param password パスワード
   * @returns ユーザ情報
   */
  public async authenticate(
    id: string,
    password: string
  ): Promise<User | null> {
    // TODO: 実際には、ユーザ認証処理を呼び出す
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    // ダミーデータ
    if (id === "yamada@xxx.co.jp" && password === "password") {
      return {
        id: "yamada@xxx.co.jp",
        name: "山田太郎",
        birthday: new Date("1990-01-01"),
        isAdmin: true,
      };
    } else if (id === "tamura@xxx.co.jp" && password === "password") {
      return {
        id: "tamura@xxx.co.jp",
        name: "田村一郎",
        birthday: new Date("1992-02-02"),
        isAdmin: false,
      };
    }

    return null;
  }
}
