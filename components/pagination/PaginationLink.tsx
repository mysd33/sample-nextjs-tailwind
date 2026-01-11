// TODO: クライアントコンポーネントの宣言を画面側に追加するか検討
"use client";

// 参考
// https://tailwindui.com/components/application-ui/navigation/pagination を参考に作成

import { Page, Pageable } from "./pagination";

// Propsのインターフェース定義
interface Props<T> {
  /**
   * ページサイズ（1ページ当たりの表示件数）
   */
  pageSize: number;
  /**
   * 検索結果のページ情報
   */
  page: Page<T>;

  /**
   * 最大表示ページ数
   */
  maxDisplayPage?: number;
  /**
   * クリック時のイベントハンドラ
   */
  onClick: (pageable: Pageable) => void;
}

/**
 * ページネーションリンク
 */
export default function PaginationLink<T>(props: Props<T>) {
  // ページ番号のリスト
  const sequence = () => {
    const maxDisplayPage = props.maxDisplayPage ?? 5;
    const totalPages = props.page.getTotalPages();
    const currentPage = props.page.pageNumber + 1;
    let begin = Math.max(1, currentPage - Math.floor(maxDisplayPage / 2));
    let end = begin + maxDisplayPage - 1;
    if (end > totalPages - 1) {
      end = totalPages;
      begin = Math.max(1, end - (maxDisplayPage - 1));
    }
    return Array.from({ length: end - begin + 1 }, (_, i) => begin + i);
  };
  // ページリンクがクリックされたときのハンドラ
  const handleClick = (pageIndex: number) => {
    // クリックされたページ番号をもとに、Pageableを作成してイベントを発火
    // ページ数は0から始まるため、ページ番号から1を引いている
    const pageNumber = pageIndex - 1;
    props.onClick(new Pageable(props.pageSize, pageNumber));
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-3">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md bg-white shadow-xs"
          aria-label="Pagination">
          <a
            href="#"
            className={
              "text-md relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 " +
              (props.page.isFirst()
                ? "cursor-default bg-gray-200 text-gray-500"
                : "text-blue-600 hover:bg-gray-50")
            }
            onClick={() => {
              if (!props.page.isFirst()) handleClick(1);
            }}>
            <span>最初へ</span>
          </a>
          <a
            href="#"
            className={
              "text-md relative inline-flex items-center px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 " +
              (props.page.isFirst()
                ? "cursor-default bg-gray-200 text-gray-500"
                : "text-blue-600 hover:bg-gray-50")
            }
            onClick={() => {
              if (!props.page.isFirst) handleClick(props.page.pageNumber);
            }}>
            <span>前へ</span>
          </a>
          {/* TODO: ページネーションの中央に「…」を表示できるようにする */}
          {sequence().map((pageIndex) => (
            <a
              key={pageIndex}
              href="#"
              aria-current={
                props.page.isCurrent(pageIndex - 1) ? "page" : undefined
              }
              className={
                "relative inline-flex px-4 py-2 font-semibold " +
                (props.page.isCurrent(pageIndex - 1)
                  ? "z-10 items-center bg-blue-600 text-sm text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2"
                  : "items-centertext-sm text-blue-600 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0")
              }
              onClick={() => handleClick(pageIndex)}>
              {pageIndex}
            </a>
          ))}
          <a
            href="#"
            className={
              "text-md relative inline-flex items-center px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 " +
              (props.page.isLast()
                ? "cursor-default bg-gray-200 text-gray-500"
                : "text-blue-600 hover:bg-gray-50")
            }
            onClick={() => {
              if (!props.page.isLast()) handleClick(props.page.pageNumber + 2);
            }}>
            <span>次へ</span>
          </a>
          <a
            href="#"
            className={
              "text-md relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 " +
              (props.page.isLast()
                ? "cursor-default bg-gray-200 text-gray-500"
                : "text-blue-600 hover:bg-gray-50")
            }
            onClick={() => {
              if (!props.page.isLast()) handleClick(props.page.getTotalPages());
            }}>
            <span>最後へ</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
