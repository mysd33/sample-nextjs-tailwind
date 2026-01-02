import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  /**
   * input要素のid
   */
  id?: string;
  /**
   * input要素のname
   */
  name?: string;
  /**
   * input要素のプレースフォルダ
   */
  placeholder?: string;
  /**
   * input要素にフォーカスを当てるかどうか
   */
  focus?: boolean;
  /**
   * input要素を読み取り専用にするかどうか
   */
  readonly?: boolean;
  /**
   * input要素を無効にするかどうか
   */
  disabled?: boolean;
  /**
   * 入力エラー情報
   */
  errors?: FieldError;
  /**
   * input要素のonChangeイベントハンドラ
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * input要素のonBlurイベントハンドラ
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// 参考: React forwardRef と React Hook Form の組み合わせ
// https://react-hook-form.com/get-started#Integratinganexistingform
// https://note.com/naoya__in_web/n/ne9adfe08ecc2
const LoginInputPassword = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      placeholder,
      focus,
      readonly,
      disabled,
      errors,
      onChange,
      onBlur,
    },
    ref
  ) => {
    const commonStyle =
      "mb-[-1px] h-12 rounded-b-lg border shadow-xs read-only:border-transparent read-only:bg-transparent read-only:px-0 read-only:shadow-none focus:z-20 focus:ring-3 read-only:focus:border-transparent read-only:focus:ring-transparent";
    const style = errors
      ? `${commonStyle} errorIcon z-20 border-red-600 focus:border-red-400 focus:ring-red-300/50`
      : `${commonStyle} z-0 border-gray-300 focus:border-blue-400 focus:ring-blue-300/50`;

    return (
      <>
        <input
          id={id}
          name={name}
          type="password"
          placeholder={placeholder}
          autoFocus={focus}
          readOnly={readonly}
          disabled={disabled}
          className={style}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      </>
    );
  }
);
LoginInputPassword.displayName = "LoginInputPassword";
export default LoginInputPassword;
