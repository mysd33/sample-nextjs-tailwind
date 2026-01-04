import RequiredBadge from "@/components/icons/RequiredBadge";
import { FieldError } from "react-hook-form";

interface Props {
  /**
   * ラベル名
   */
  label?: string;
  /**
   * ラベルのfor属性
   */
  labelFor?: string;
  /**
   * スクリーンリーダー用にラベルを非表示にするか
   */
  srOnly?: boolean;
  /**
   * 必須項目かどうか
   */
  required?: boolean;
  /**
   * 入力エラーメッセージ
   */
  error?: FieldError;
  /**
   * クラス名
   */
  className?: string;
  /**
   * 子要素
   */
  children?: React.ReactNode;
}
export default function InputItem({
  label,
  labelFor,
  srOnly,
  required,
  className = "",
  error: errors,
  children,
}: Props) {
  return (
    <>
      <div className={`flex flex-col ${className}`}>
        {label && (
          <label htmlFor={labelFor} className={srOnly ? "sr-only" : ""}>
            {label}
            {required && <RequiredBadge />}
          </label>
        )}
        {children}
        {errors && (
          <div className="flow flow-col m-1 text-sm text-red-600">
            <div>{errors.message}</div>
          </div>
        )}
      </div>
    </>
  );
}
