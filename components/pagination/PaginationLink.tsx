// 参考
// https://tailwindui.com/components/application-ui/navigation/pagination を参考に作成

import clsx from "clsx";
import Link from "next/link";
import { Page } from "./pagination";

// Propsのインターフェース定義
interface Props<T> {
  /**
   * 検索結果のページ情報
   */
  page: Page<T>;

  /**
   * 最大表示ページ数
   */
  maxDisplayPage?: number;

  /**
   * リンクの遷移先URL（省略時は#）
   */
  forwardViewURL?: string;

  /**
   * ページ番号のクエリパラメータ名（デフォルト: pageNumber）
   */
  pageNumberParamName?: string;
  /**
   * ページサイズのクエリパラメータ名（デフォルト: pageSize）
   */
  pageSizeParamName?: string;
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

  const pageNumberParamName = props.pageNumberParamName ?? "pageNumber";
  const pageSizeParamName = props.pageSizeParamName ?? "pageSize";

  return (
    <div className="flex items-center justify-between border-t border-gray-200 py-3">
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md bg-white shadow-xs"
          aria-label="Pagination">
          <Link
            href={
              props.page.isFirst()
                ? "#"
                : props.forwardViewURL
                  ? `${props.forwardViewURL}?${pageNumberParamName}=0&${pageSizeParamName}=${props.page.pageSize}`
                  : "#"
            }
            className={clsx(
              "text-md relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0",
              {
                "pointer-events-none cursor-default bg-gray-200 text-gray-500":
                  props.page.isFirst(),
                "text-blue-600 hover:bg-gray-50": !props.page.isFirst(),
              },
            )}>
            <span>最初へ</span>
          </Link>
          <Link
            href={
              props.page.isFirst()
                ? "#"
                : props.forwardViewURL
                  ? `${props.forwardViewURL}?${pageNumberParamName}=${props.page.pageNumber - 1}&${pageSizeParamName}=${props.page.pageSize}`
                  : "#"
            }
            className={clsx(
              "text-md relative inline-flex items-center px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0",
              {
                "pointer-events-none cursor-default bg-gray-200 text-gray-500":
                  props.page.isFirst(),
                "text-blue-600 hover:bg-gray-50": !props.page.isFirst(),
              },
            )}>
            <span>前へ</span>
          </Link>
          {/* TODO: ページネーションの中央に「…」を表示できるようにする */}
          {sequence().map((pageIndex) => (
            <Link
              key={pageIndex}
              href={
                props.forwardViewURL
                  ? `${props.forwardViewURL}?${pageNumberParamName}=${pageIndex - 1}&${pageSizeParamName}=${props.page.pageSize}`
                  : "#"
              }
              aria-current={
                props.page.isCurrent(pageIndex - 1) ? "page" : undefined
              }
              className={clsx("relative inline-flex px-4 py-2 font-semibold", {
                "z-10 items-center bg-blue-600 text-sm text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2":
                  props.page.isCurrent(pageIndex - 1),
                "items-centertext-sm text-blue-600 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0":
                  !props.page.isCurrent(pageIndex - 1),
              })}>
              {pageIndex}
            </Link>
          ))}
          <Link
            href={
              props.page.isLast()
                ? "#"
                : props.forwardViewURL
                  ? `${props.forwardViewURL}?${pageNumberParamName}=${props.page.pageNumber + 1}&${pageSizeParamName}=${props.page.pageSize}`
                  : "#"
            }
            className={clsx(
              "text-md relative inline-flex items-center px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0",
              {
                "pointer-events-none cursor-default bg-gray-200 text-gray-500":
                  props.page.isLast(),
                "text-blue-600 hover:bg-gray-50": !props.page.isLast(),
              },
            )}>
            <span>次へ</span>
          </Link>
          <Link
            href={
              props.page.isLast()
                ? "#"
                : props.forwardViewURL
                  ? `${props.forwardViewURL}?${pageNumberParamName}=${props.page.getTotalPages() - 1}&${pageSizeParamName}=${props.page.pageSize}`
                  : "#"
            }
            className={clsx(
              "text-md relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0",
              {
                "pointer-events-none cursor-default bg-gray-200 text-gray-500":
                  props.page.isLast(),
                "text-blue-600 hover:bg-gray-50": !props.page.isLast(),
              },
            )}>
            <span>最後へ</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
