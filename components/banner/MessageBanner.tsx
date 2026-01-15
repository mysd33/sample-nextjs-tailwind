import WarnIcon from "@/components/icons/WarnIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import ErrorIcon from "@/components/icons/ErrorIcon";

export type MessageLevel = "validation" | "info" | "warn" | "error" | undefined;

interface Props {
  level: MessageLevel;
  message?: string;
}

const BASE_CLASS =
  "mb-4 flex items-center gap-3 rounded-lg border px-4 py-3 w-full";

const levelConfig = {
  validation: {
    className: "border-red-950/20 bg-red-500/20",
    icon: <ErrorIcon />,
    textClassName: "text-red-950",
    role: "alert" as const,
    ariaLive: "assertive" as const,
  },
  info: {
    className: "border-green-950/20 bg-green-600/20",
    icon: <InfoIcon />,
    textClassName: "text-green-950",
    role: "status" as const,
    ariaLive: "polite" as const,
  },
  warn: {
    className: "border-amber-950/20 bg-amber-500/20",
    icon: <WarnIcon />,
    textClassName: "text-amber-950",
    role: "status" as const,
    ariaLive: "polite" as const,
  },
  error: {
    className: "border-red-950/20 bg-red-500/20",
    icon: <ErrorIcon />,
    textClassName: "text-red-950",
    role: "alert" as const,
    ariaLive: "assertive" as const,
  },
};

export default function MessageBanner({ message, level }: Props) {
  if (!level) {
    return null;
  }
  const config = levelConfig[level];
  if (!config) {
    return null;
  }
  let displayMessage = message;
  if (level === "validation") {
    displayMessage =
      message && message.length > 0 ? message : "入力エラーです。";
  }
  if (!displayMessage) {
    return null;
  }

  return (
    <div
      role={config.role}
      aria-live={config.ariaLive}
      className={`${BASE_CLASS} ${config.className}`}>
      <span className="flex items-center" aria-hidden="true">
        {config.icon}
      </span>
      <span className={`text-sm ${config.textClassName}`}>
        {displayMessage}
      </span>
    </div>
  );
}
