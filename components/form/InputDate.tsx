import { forwardRef } from "react";
import BaseInput from "./BaseInput";
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
const InputDate = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <BaseInput {...props} type="date" ref={ref} />;
});

InputDate.displayName = "InputDate";
export default InputDate;
