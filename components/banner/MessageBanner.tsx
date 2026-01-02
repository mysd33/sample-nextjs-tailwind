import WarnIcon from "@/components/icons/WarnIcon";
import InfoIcon from "../icons/InfoIcon";
import ErrorIcon from "../icons/ErrorIcon";

export type MessageLevel = "" | "validation" | "info" | "warn" | "error";

interface Props {
  message: string;
  level?: MessageLevel;
}

export default function MessageBanner({ message, level }: Props) {
  return (
    <>
      {level === "validation" && (
        <div className="mb-4 flex flex-row content-center rounded-lg border border-red-950/20 bg-red-500/20 px-4 py-3">
          <div className="flex flex-row">
            <ErrorIcon />
            <span className="mt-1 ml-3 text-red-950">入力エラーです。</span>
          </div>
        </div>
      )}
      {level === "info" && message && (
        <div className="mb-4 flex flex-row content-center rounded-lg border border-green-950/20 bg-green-600/20 px-4 py-3">
          <div className="flex flex-row">
            <InfoIcon />
            <span className="mt-1 ml-3 text-green-950">{message}</span>
          </div>
        </div>
      )}
      {level === "warn" && message && (
        <div className="mb-4 flex flex-row content-center rounded-lg border border-amber-950/20 bg-amber-500/20 px-4 py-3">
          <div className="flex flex-row">
            <WarnIcon />
          </div>
          <span className="mt-1 ml-3 text-amber-950">{message}</span>
        </div>
      )}
      {level === "error" && message && (
        <div className="mb-4 flex flex-row content-center rounded-lg border border-red-950/20 bg-red-500/20 px-4 py-3">
          <div className="flex flex-row">
            <ErrorIcon />
            <span className="mt-1 ml-3 text-red-950">{message}</span>
          </div>
        </div>
      )}
    </>
  );
}
