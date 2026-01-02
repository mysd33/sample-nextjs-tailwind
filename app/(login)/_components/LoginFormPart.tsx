// Form部分は、react-hook-formを使用するためクライアントコンポーネントとして切り出し
"use client";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";
import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import LoginFormArea from "@/components/form/LoginFormArea";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/lib/login/authenticationService";
import * as z from "zod";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";

interface FormInput {
  userId: string;
  password: string;
}

export default function LoginFormPart() {
  const [validationErrorMessages, setValidationErrorMessages] = useState<
    string[]
  >([]);
  // App RouterのuseRouter
  const router = useRouter();

  // Zodを使った入力チェックのスキーマ定義
  const schema = z.object({
    userId: z.string().min(1, "ユーザIDは必須入力です。"),
    password: z.string().min(1, "パスワードは必須入力です。"),
  });

  // react-hook-formの定義
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  // バナーメッセージの状態管理
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
      // ログイン成功時にはメニュー画面へ遷移
      router.push("/menu");
    });
  };

  // 入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<FormInput>) => {
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
            {...register("userId")}
          />
          {/* TODO:Zodを使った入力チェックの実装 */}
          <LoginInputPassword
            id="password"
            placeholder="パスワード"
            errors={errors.password}
            {...register("password")}
          />
        </InputItem>
        <SubmitButton size="lg" className="mt-3">
          ログイン
        </SubmitButton>
      </LoginFormArea>
    </>
  );
}
