import { UserRepository } from "@/lib/common/repositories/userRepository";

/**
 * 認証機能を提供するServiceクラス
 */
export class AuthenticationService {
  private static instance: AuthenticationService;
  private constructor(
    private readonly userRepository: UserRepository = UserRepository.getInstance()
  ) {
    this.userRepository = userRepository;
  }

  /**
   * 認証機能を提供するServiceクラスのインスタンスを取得する
   * @returns 認証機能を提供するServiceクラスのインスタンス
   */
  public static getInstance(): AuthenticationService {
    if (!AuthenticationService.instance) {
      AuthenticationService.instance = new AuthenticationService();
    }
    return AuthenticationService.instance;
  }

  /**
   * ログイン処理
   * @param id ユーザID
   * @param password パスワード
   */
  public async login(id: string, password: string): Promise<void> {
    const user = await this.userRepository.authenticate(id, password);

    if (user) {
      console.log(`ログイン成功: ${user.id}`);
      // TODO: ログイン成功時に、ログイン済認証時情報を保存
    }
  }

  /**
   * ログアウト処理
   */
  public async logout(): Promise<void> {
    console.log(`ログアウト処理`);
    // TODO: ログアウト時にユーザ情報をクリア
  }
}
