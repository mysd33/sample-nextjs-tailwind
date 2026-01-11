"use client";

import { Page, Pageable } from "@/components/pagination/clientPagination";
import PaginationLink from "@/components/pagination/PaginationLink";

// サーバコンポーネントからクライアントコンポーネントは
// プレーンオブジェクトか組み込みのデータ型しか渡せない。
// クラス情報やイベントハンドラの関数の受け渡しができないため、
// ページネーション情報をPropsとして受け取るためのインターフェースを定義
interface Props {
  /**
   * ページサイズ（1ページ当たりの表示件数）
   */
  pageSize: number;

  /**
   * 現在のページ数
   */
  pageNumber: number;

  /**
   * 総件数
   */
  totalElements: number;

  /**
   * 最大表示ページ数
   */
  maxDisplayPage?: number;
}

/**
 * ユーザ一覧画面
 */
export default function PaginationViewPart({
  pageSize,
  pageNumber,
  totalElements,
  maxDisplayPage,
}: Props) {
  // ページネーションリンククリック時
  const handlePaginationLinkClick = (pageable: Pageable) => {
    console.log(`ページリンクがクリックされました ${pageable.pageNumber}`);
    // TODO: pageableをもとに再検索を実行し、画面を更新する処理を実装予定
  };

  /* ページネーション機能 */
  return (
    <PaginationLink
      pageSize={10}
      page={new Page(new Pageable(pageSize, pageNumber), totalElements)}
      maxDisplayPage={maxDisplayPage}
      onClick={handlePaginationLinkClick}
    />
  );
}
