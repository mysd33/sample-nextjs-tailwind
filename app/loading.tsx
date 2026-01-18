/**
 * Linkコンポーネント等で使用されるローディング画面
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      <span>Loading...</span>
    </div>
  );
}
