// Form部分は、react-hook-formを使用するためクライアントコンポーネントとして切り出し
"use client";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";
import SubmitButton from "@/components/button/SubmitButton";
import LoginFormArea from "@/components/form/LoginFormArea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/lib/login/authenticationService";
import * as z from "zod";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import LoginInputItem from "./LoginInputItem";
import { LoginFormInput } from "./LoginFormInput";

export default function LoginFormPart() {
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
  } = useForm<LoginFormInput>({
    resolver: zodResolver(schema),
  });

  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>("");
  const [message, setMessage] = useState<string>("");

  // 入力チェック成功時
  const onValidSubmit = (data: LoginFormInput) => {
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
  const onInvalidSubmit = () => {
    setMessageLevel("validation");
  };

  return (
    <>
      <MessageBanner message={message} level={messageLevel} />
      <LoginFormArea onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
        <LoginInputItem errors={errors}>
          <LoginInputText
            id="userId"
            placeholder="ユーザID"
            focus={true}
            errors={errors.userId}
            {...register("userId")}
          />
          <LoginInputPassword
            id="password"
            placeholder="パスワード"
            errors={errors.password}
            {...register("password")}
          />
        </LoginInputItem>
        <SubmitButton size="lg" className="mt-3">
          ログイン
        </SubmitButton>
      </LoginFormArea>
    </>
  );
}
