import { FieldErrors } from "react-hook-form";

interface Props {
  /**
   * 入力エラーメッセージ
   */
  errors?: FieldErrors;
  children?: React.ReactNode;
}

export default function LoginInputItem({ errors, children }: Props) {
  return (
    <>
      <div className="flex flex-col">
        {children}
        {errors && (
          <div className="flow flow-col m-1 text-sm text-red-600">
            <div>{errors.userId?.message}</div>
            <div>{errors.password?.message}</div>
          </div>
        )}
      </div>
    </>
  );
}
