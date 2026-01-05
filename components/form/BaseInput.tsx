import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  /*
   * 入力エラー情報
   */
  error?: FieldError;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Props;

// 参考: React forwardRef と React Hook Form の組み合わせ
// https://react-hook-form.com/get-started#Integratinganexistingform
// https://note.com/naoya__in_web/n/ne9adfe08ecc2
const BaseInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const commonStyle =
    "h-10 rounded-lg border shadow-xs read-only:border-transparent read-only:bg-transparent read-only:px-0 read-only:shadow-none focus:ring-3 read-only:focus:border-transparent read-only:focus:ring-transparent";

  const style = props.error
    ? `${commonStyle} errorIcon border-red-600 focus:border-red-400 focus:ring-red-300/50`
    : `${commonStyle} border-gray-300 focus:border-blue-400 focus:ring-blue-300/50`;

  return <input {...props} ref={ref} className={style} />;
});

BaseInput.displayName = "BaseInput";

export default BaseInput;
