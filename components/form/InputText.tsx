import { FieldError } from "react-hook-form";
import BaseInput from "./BaseInput";
import { forwardRef } from "react";

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
const InputText = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <BaseInput {...props} type="text" ref={ref} />;
});

InputText.displayName = "InputText";

export default InputText;
