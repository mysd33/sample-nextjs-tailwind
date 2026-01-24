/**
 * バックエンドとのREST API通信で共通利用するページネーションのResource定義
 * 元のPage暮らす
 */

/**
 * Pagableリソース
 */
export interface PageableResource {
  /**
   * ページサイズ（1ページ当たりの表示件数）
   */
  pageSize: number;
  /**
   * 現在のページ数
   */
  pageNumber: number;
}

/**
 * Pageリソース
 */
export interface PageResource<T> {
  /**
   * ページネーション情報
   */
  pageable: PageableResource;
  /**
   * ページの表示内容（検索結果）
   */
  content: T[];
  /**
   * 総件数
   */
  totalElements: number;
}
