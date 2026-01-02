// Form部分はクライアントコンポーネントとして切り出し
"use client";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";
import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import LoginFormArea from "@/components/form/LoginFormArea";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { login } from "@/lib/login/authenticationService";
import { useRouter } from "next/navigation";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";

interface FormInput {
  userId: string;
  password: string;
}

export default function LoginFormPart() {
  const [validationErrorMessages, setValidationErrorMessages] = useState<
    string[]
  >([]);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>();

  const [messageLevel, setMessageLevel] = useState<MessageLevel>("");
  const [message, setMessage] = useState<string>("");

  // 入力チェック成功時
  const onValidSubmit = (data: FormInput) => {
    // 入力エラーメッセージのクリア
    setValidationErrorMessages([]);
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel("");

    // ビジネスロジックの呼び出し
    login(data.userId, data.password).then(() => {
      // ログイン成功時にメニュー画面へ遷移
      router.push("/menu");
    });
  };

  // 入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<FormInput>) => {
    // TODO: 入力エラー時のバナー表示
    console.log(
      "Validation Errors:",
      errors.userId?.message,
      errors.password?.message
    );
    // 入力エラーメッセージの設定
    const validationErrorMessages = [
      errors.userId?.message,
      errors.password?.message,
    ];
    setValidationErrorMessages(
      validationErrorMessages.filter((msg): msg is string => !!msg)
    );
    setMessageLevel("validation");
  };

  return (
    <>
      <MessageBanner message={message} level={messageLevel} />
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
    </>
  );
}
