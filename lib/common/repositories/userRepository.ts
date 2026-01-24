import { User } from "@/lib/common/models/user";
import { Page, Pageable } from "../../../components/pagination/pagination";

const sleepTime = 500;
//const sleepTime = 3000;

/**
 * ユーザ情報を管理するRepositoryクラス
 */
export class UserRepository {
  // ダミーストア
  private users: User[] = [
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
    {
      id: "tamura2@xxx.co.jp",
      name: "田村二郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura3@xxx.co.jp",
      name: "田村三郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura4@xxx.co.jp",
      name: "田村四郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura5@xxx.co.jp",
      name: "田村五郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura6@xxx.co.jp",
      name: "田村六郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura7@xxx.co.jp",
      name: "田村七郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura8@xxx.co.jp",
      name: "田村八郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura9@xxx.co.jp",
      name: "田村九郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura10@xxx.co.jp",
      name: "田村十郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "yamada2@xxx.co.jp",
      name: "山田太郎2",
      birthday: new Date("1990-01-01"),
      password: "password",
      isAdmin: true,
    },
    {
      id: "tamura11@xxx.co.jp",
      name: "田村一郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura12@xxx.co.jp",
      name: "田村二郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura13@xxx.co.jp",
      name: "田村三郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura14@xxx.co.jp",
      name: "田村四郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura15@xxx.co.jp",
      name: "田村五郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura16@xxx.co.jp",
      name: "田村六郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura17@xxx.co.jp",
      name: "田村七郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura18@xxx.co.jp",
      name: "田村八郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura19@xxx.co.jp",
      name: "田村九郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura20@xxx.co.jp",
      name: "田村十郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "yamada3@xxx.co.jp",
      name: "山田太郎3",
      birthday: new Date("1990-01-01"),
      password: "password",
      isAdmin: true,
    },
    {
      id: "tamura21@xxx.co.jp",
      name: "田村一郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura22@xxx.co.jp",
      name: "田村二郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura23@xxx.co.jp",
      name: "田村三郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura24@xxx.co.jp",
      name: "田村四郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura25@xxx.co.jp",
      name: "田村五郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura26@xxx.co.jp",
      name: "田村六郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura27@xxx.co.jp",
      name: "田村七郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura28@xxx.co.jp",
      name: "田村八郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura29@xxx.co.jp",
      name: "田村九郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
    {
      id: "tamura30@xxx.co.jp",
      name: "田村十郎",
      birthday: new Date("1986-11-05"),
      password: "password",
      isAdmin: false,
    },
  ];

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
    password: string,
  ): Promise<User | null> {
    // TODO: 実際には、ユーザ認証処理を呼び出す
    // サーバ処理を疑似するため待機
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

  /**
   * ページネーションしてユーザ情報を取得する
   * @param pageable ページネーション情報
   * @returns ページ情報
   */
  public async findAllForPagination(pageable: Pageable): Promise<Page<User>> {
    const pageSize = pageable.pageSize;
    const offset = pageable.offset;
    // TODO: サーバ側のユーザ認証処理を呼び出す

    // サーバ処理を疑似するため、0.5秒待機
    console.log("UserRepository findAllForPagination start");
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    const targetUsers = this.users.slice(offset, offset + pageSize);
    const totalSize = this.users.length;
    console.log("UserRepository findAllForPagination end");

    // ページ情報を返却
    return new Page(pageable, targetUsers, totalSize);
  }

  /**
   * 指定したIDのユーザ情報を取得する
   * @param id ユーザID
   * @returns ユーザ情報
   */
  public async findOne(id: string): Promise<User | null> {
    // サーバ処理を疑似するため、0.5秒待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    return this.users.find((user) => user.id === id) as User | null;
  }

  /**
   * ユーザを作成する
   * @param user ユーザ情報
   */
  public async create(user: User): Promise<void> {
    // サーバ処理を疑似するため、0.5秒待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    this.users.push(user);
  }

  /**
   * ユーザ情報を更新する
   * @param user ユーザ情報
   */
  public async update(user: User): Promise<void> {
    // サーバ処理を疑似するため、0.5秒待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  /**
   * ユーザ情報を削除する
   * @param id ユーザID
   */
  public async delete(id: string): Promise<void> {
    // サーバ処理を疑似するため、0.5秒待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
