import RequiredBadge from "@/components/icons/RequiredBadge";

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
  errors?: string[];
  children?: React.ReactNode;
}
export default function InputItem({
  label,
  labelFor,
  srOnly,
  required,
  errors,
  children,
}: Props) {
  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label htmlFor={labelFor} className={srOnly ? "sr-only" : ""}>
            {label}
            {required && <RequiredBadge />}
          </label>
        )}
        {children}
        {errors && errors.length > 0 && (
          <div className="flow flow-col m-1 text-sm text-red-600">
            {errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
