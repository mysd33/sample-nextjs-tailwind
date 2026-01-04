import { FieldError } from "react-hook-form";
import BaseInput from "./BaseInput";
import { forwardRef } from "react";

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
  error?: FieldError;
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
const InputText = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      placeholder,
      focus,
      readonly,
      disabled,
      error,
      onChange,
      onBlur,
    },
    ref
  ) => {
    return (
      <BaseInput
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        focus={focus}
        readonly={readonly}
        disabled={disabled}
        ref={ref}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  }
);

InputText.displayName = "InputText";

export default InputText;
