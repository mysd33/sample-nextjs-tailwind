import { useCallback, useState } from "react";

/**
 * React の ErrorBoundaryに対応した安全なエラーハンドリングのためのカスタムフック
 * @returns 安全に非同期・同期関数を実行するための関数を含むオブジェクト
 */
export const useErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);

  // ステート更新時にエラーがあればスローする
  if (error) {
    throw error;
  }

  /**
   * 安全に非同期関数を実行するためのフック
   * エラーが発生した場合、ステートに設定し再レンダリングをトリガーする
   */
  const safeAsync = useCallback(
    <T extends (...args: any[]) => Promise<any>>(asyncFunc: T) =>
      async (...args: Parameters<T>) => {
        try {
          // 対象の非同期処理を実行
          return await asyncFunc(...args);
        } catch (err) {
          // エラーをステートに設定し再レンダリングをトリガー
          setError(err as Error);
        }
      },
    [setError],
  );

  const safeSync = useCallback(
    <T extends (...args: any[]) => any>(syncFunc: T) =>
      (...args: Parameters<T>) => {
        try {
          // 対象の同期処理を実行
          return syncFunc(...args);
        } catch (err) {
          // エラーをステートに設定し再レンダリングをトリガー
          setError(err as Error);
        }
      },
    [setError],
  );

  return { safeAsync, safeSync };
};
