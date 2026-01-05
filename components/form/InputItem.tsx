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
}

type InputItemProps = React.InputHTMLAttributes<HTMLDivElement> & Props;

export default function InputItem(props: InputItemProps) {
  return (
    <>
      <div className={`flex flex-col ${props.className}`}>
        {props.label && (
          <label
            htmlFor={props.labelFor}
            className={props.srOnly ? "sr-only" : ""}>
            {props.label}
            {props.required && <RequiredBadge />}
          </label>
        )}
        {props.children}
        {props.error && (
          <div className="flow flow-col m-1 text-sm text-red-600">
            <div>{props.error.message}</div>
          </div>
        )}
      </div>
    </>
  );
}
