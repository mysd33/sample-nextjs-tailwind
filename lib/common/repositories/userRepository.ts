import { User } from "@/lib/common/models/user";
import { BusinessError } from "@/lib/framework/errors";
import { Page, Pageable } from "../../../components/pagination/pagination";
import { API_BASE_URL } from "../constants/contants";
import { PageResource } from "../resources/pageResource";
import { UserResource } from "../resources/userResource";
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
    password: string,
  ): Promise<User | null> {
    const res = await fetch(`${API_BASE_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    });
    if (res.ok) {
      const user: User = await res.json();
      return user;
    } else if (res.status === 401) {
      // 認証エラーにする
      // TODO: エラーコード
      throw new BusinessError("xxxxx", "ユーザIDまたはパスワードが不正です。");
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
    const pageNumber = pageable.pageNumber;
    const res = await fetch(
      `${API_BASE_URL}/api/v1/users?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      // TODOを変更・削除しても、一覧がキャッシュされてデータ残ってしまうので、
      // no-storeを指定して毎回最新の情報を取得する
      { cache: "no-store" },
    );

    // サーバから取得したリソースデータではisFirstメソッドなどのメソッドを扱えないため
    // 再度Pageオブジェクトを生成して返す
    const page: PageResource<UserResource> = await res.json();
    return new Page<User>(
      new Pageable(page.pageable.pageSize, page.pageable.pageNumber),
      page.content.map((userResource) => ({
        ...userResource,
        birthday: new Date(userResource.birthday),
      })),
      page.totalElements,
    );
  }

  /**
   * 指定したIDのユーザ情報を取得する
   * @param id ユーザID
   * @returns ユーザ情報
   */
  public async findOne(id: string): Promise<User | null> {
    const res = await fetch(`${API_BASE_URL}/api/v1/users/${id}`, {
      // TODOを変更・削除しても、一覧がキャッシュされてデータ残ってしまうので、
      // no-storeを指定して毎回最新の情報を取得する
      //cache: "no-store",
    });
    if (!res.ok) {
      return null;
    }
    const user: UserResource = await res.json();
    // サーバから取得したリソースデータではDate型が扱えないため暫定対処で再度Userオブジェクトを生成して返す
    // userがnull出ない場合のみ処理を行うように修正
    if (user) {
      return {
        ...user,
        birthday: new Date(user.birthday),
      };
    }
    return null;
  }

  /**
   * ユーザを作成する
   * @param user ユーザ情報
   */
  public async create(user: User): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
  }

  /**
   * ユーザ情報を更新する
   * @param user ユーザ情報
   */
  public async update(user: User): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/v1/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
  }

  /**
   * ユーザ情報を削除する
   * @param id ユーザID
   */
  public async delete(id: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/v1/users/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
  }
}
