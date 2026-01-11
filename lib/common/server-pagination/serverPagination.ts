/**
 * ページの情報を保持するクラス（サーバ処理用）
 */
export class Page<T> {
  /**
   * ページサイズ（1ページ当たりの表示件数）
   */
  public pageSize: number;
  /**
   * 現在のページ数
   */
  public pageNumber: number;
  constructor(
    /**
     * ページネーション情報
     */
    pageable: Pageable,
    /**
     * ページの表示内容（検索結果）
     */
    public content: T[],
    /**
     * 総件数
     */
    public totalElements: number,
  ) {
    this.pageSize = pageable.pageSize;
    this.pageNumber = pageable.pageNumber;
  }

  /**
   * 最初のページかどうかを判定する
   */
  public isFirst(): boolean {
    return this.pageNumber === 0;
  }

  /**
   * 指定ページ数が現在のページかどうかを判定する
   *
   * @param pageNumber ページ数
   */
  public isCurrent(pageNumber: number): boolean {
    return this.pageNumber === pageNumber;
  }

  /**
   * 最後のページかどうかを判定する
   */
  public isLast(): boolean {
    return this.pageNumber === this.getTotalPages() - 1;
  }

  /**
   * 総ページ数を取得する
   */
  public getTotalPages(): number {
    return Math.ceil(this.totalElements / this.pageSize);
  }
}

/**
 * ページネーションの情報を保持するクラス
 */
export class Pageable {
  /**
   * 現在ページ数の基づくオフセット（検索結果を返却する際の開始位置）
   */
  public offset: number;
  constructor(
    /**
     * ページサイズ（1ページ当たりの表示件数）
     */
    public pageSize: number,
    /**
     * 現在のページ数
     */
    public pageNumber: number,

    //TODO: ソート条件を追加する
    //public sort: "asc" | "desc" = "asc",
  ) {
    // ページ数からオフセットを計算
    this.offset = pageNumber * pageSize;
  }
}
