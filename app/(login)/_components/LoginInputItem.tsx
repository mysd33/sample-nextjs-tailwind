import { FieldErrors } from "react-hook-form";
import { LoginFormInput } from "./LoginFormInput";

interface Props {
  /**
   * 入力エラーメッセージ
   */
  errors?: FieldErrors<LoginFormInput>;
  children?: React.ReactNode;
}

/**
 * ログイン画面専用のユーザIDとパスワードを1つにした入力項目領域
 */
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
