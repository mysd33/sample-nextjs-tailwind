// TODO: フォーム部分だけuse clientにするように切り出す
"use client";
import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import LoginFormArea from "@/components/form/LoginFormArea";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface FormInput {
  userId: string;
  password: string;
}

export default function Home() {
  const [validationErrorMessages, setValidationErrorMessages] = useState<
    string[]
  >([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  // 正常時
  const onValidSubmit = (data: FormInput) => {
    // 入力エラーメッセージのクリア
    setValidationErrorMessages([]);
    // TODO: ビジネスロジックの実装
    console.log("Success:", data);
  };

  // 入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<FormInput>) => {
    // TODO: 入力エラー時のバナー表示
    console.log(
      "Validation Errors:",
      errors.userId?.message,
      errors.password?.message
    );
    const validationErrorMessages = [
      errors.userId?.message,
      errors.password?.message,
    ];
    setValidationErrorMessages(
      validationErrorMessages.filter((msg): msg is string => !!msg)
    );
  };

  return (
    <>
      <LoginFormArea onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
        <InputItem errors={validationErrorMessages}>
          {/* TODO:Zodを使った入力チェックの実装 */}
          <LoginInputText
            id="userId"
            placeholder="ユーザID"
            focus={true}
            errors={errors.userId}
            {...register("userId", { required: "ユーザIDは必須です" })}
          />
          {/* TODO:Zodを使った入力チェックの実装 */}
          <LoginInputPassword
            id="password"
            placeholder="パスワード"
            errors={errors.password}
            {...register("password", { required: "パスワードは必須です" })}
          />
        </InputItem>
        <SubmitButton size="lg" className="mt-3">
          ログイン
        </SubmitButton>
      </LoginFormArea>
      {/* TODO:　テーブル */}
    </>
  );
}
