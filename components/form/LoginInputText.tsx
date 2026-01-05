import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  /**
   * 入力エラー情報
   */
  error?: FieldError;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & Props;

// 参考: React forwardRef と React Hook Form の組み合わせ
// https://react-hook-form.com/get-started#Integratinganexistingform
// https://note.com/naoya__in_web/n/ne9adfe08ecc2
const LoginInputText = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const commonStyle =
      "mb-[-1px] h-12 rounded-t-lg border shadow-xs read-only:border-transparent read-only:bg-transparent read-only:px-0 read-only:shadow-none focus:z-20 focus:ring-3 read-only:focus:border-transparent read-only:focus:ring-transparent";
    const style = props.error
      ? `${commonStyle} errorIcon z-20 border-red-600 focus:border-red-400 focus:ring-red-300/50`
      : `${commonStyle} z-0 border-gray-300 focus:border-blue-400 focus:ring-blue-300/50`;

    return (
      <>
        <input {...props} className={style} ref={ref} />
      </>
    );
  },
);

LoginInputText.displayName = "LoginInputText";

export default LoginInputText;
