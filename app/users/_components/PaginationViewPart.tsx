"use client";

import { useCallback, useMemo } from "react";
import { Page, Pageable } from "@/components/pagination/clientPagination";
import PaginationLink from "@/components/pagination/PaginationLink";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  // ページネーションリンククリック時
  const handlePaginationLinkClick = useCallback(
    (pageable: Pageable) => {
      console.log(`ページリンクがクリックされました ${pageable.pageNumber}`);
      // Pageableをもとに再検索を実行し、画面を更新
      router.push(
        `/users?pageNumber=${pageable.pageNumber}&pageSize=${pageable.pageSize}`,
      );
    },
    [router],
  );

  const pageInfo = useMemo(
    () => new Page(new Pageable(pageSize, pageNumber), totalElements),
    [pageNumber, pageSize, totalElements],
  );

  /* ページネーション機能 */
  return (
    <PaginationLink
      pageSize={pageSize}
      page={pageInfo}
      maxDisplayPage={maxDisplayPage}
      onClick={handlePaginationLinkClick}
    />
  );
}
