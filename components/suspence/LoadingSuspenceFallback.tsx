import LoadingSpinnerIcon from "../icons/LodingSpinnerIcon";

/**
 * 処理中に表示するスピナーコンポーネント
 */
export default function LoadingSuspenceFallback({ label }: { label?: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <LoadingSpinnerIcon />
      <span>{label ?? "Loading..."}</span>
    </div>
  );
}
