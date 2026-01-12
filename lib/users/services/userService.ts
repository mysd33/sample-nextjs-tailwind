import { User } from "@/lib/common/models/user";
import { UserRepository } from "@/lib/common/repositories/userRepository";
import {
  Page,
  Pageable,
} from "@/lib/common/server-pagination/serverPagination";

/**
 * ユーザ情報を提供するServiceクラス
 */
export class UserService {
  private static instance: UserService;
  private constructor(
    private readonly userRepository: UserRepository = UserRepository.getInstance(),
  ) {}

  /**
   * ユーザ情報を提供するServiceクラスのインスタンスを取得する
   * @returns ユーザ情報を提供するServiceクラスのインスタンス
   */
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  /**
   * ページネーションしてユーザ情報を取得する
   * @param pageable ページネーション情報
   * @returns ユーザリストの1ページ分
   */
  public async findAllForPageNation(pageable: Pageable): Promise<Page<User>> {
    return this.userRepository.findAllForPagination(pageable);
  }

  /**
   * 指定したIDのユーザ情報を取得する
   * @param id ユーザID
   * @returns ユーザ情報
   */
  public async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne(id);
  }

  /**
   * ユーザを作成する
   * @param user ユーザ情報
   */
  public async create(user: User): Promise<void> {
    return this.userRepository.create(user);
  }

  /**
   * ユーザ情報を更新する
   * @param user ユーザ情報
   */
  public async update(user: User): Promise<void> {
    return this.userRepository.update(user);
  }

  /**
   * ユーザ情報を削除する
   * @param id ユーザID
   */
  public async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
