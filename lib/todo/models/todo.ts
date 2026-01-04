/**
 * Todoリスト情報
 */
export interface Todo {
  /**
   * TodoリストID
   */
  id?: string
  /**
   * タイトル
   */
  title: string
  /**
   * 完了フラグ
   */
  finished?: boolean
  /**
   * 作成日時
   */
  createAt?: Date
}
