/**
 * バックエンドとのREST API通信で共通利用するUserのResource定義
 */
export interface UserResource {
  /**
   * ユーザID
   */
  id: string;
  /**
   * 名前
   */
  name: string;
  /**
   * 誕生日（UserだとDate型のbirthdayを文字列型に変換して扱う。）
   */
  birthday: string;

  /**
   * 管理者フラグ
   */
  isAdmin: boolean;

  /**
   * パスワード
   */
  password?: string;

  /**
   * 確認用パスワード
   */
  confirmPassword?: string;
}
