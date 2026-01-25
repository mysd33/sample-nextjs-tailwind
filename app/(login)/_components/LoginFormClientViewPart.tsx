// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネントとして切り出し
"use client";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import SubmitButton from "@/components/button/SubmitButton";
import LoginFormArea from "@/components/form/LoginFormArea";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginFormInput } from "../_lib/LoginFormInput";
import LoginInputItem from "./LoginInputItem";

/**
 * ログイン画面のフォーム部分
 */
export default function LoginFormClientViewPart() {
  // Zodを使った入力チェックのスキーマ定義
  const schema = z.object({
    userId: z.string().min(1, "ユーザIDは必須入力です。"),
    password: z.string().min(1, "パスワードは必須入力です。"),
  });

  // react-hook-formの定義
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<LoginFormInput>({
    resolver: zodResolver(schema),
  });

  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>();
  const [message, setMessage] = useState<string>("");

  // 入力チェック成功時
  const onValidSubmit = async (form: LoginFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel(undefined);

    // Better Authを使ったログイン処理
    await authClient.signIn.email(
      {
        email: form.userId,
        password: form.password,
        callbackURL: "/menu",
      },
      {
        onError: (ctx) => {
          // ログイン失敗時にはバナーメッセージを表示
          // TODO: エラーコードをもとにメッセージのカスタマイズする
          // 参考: https://www.better-auth.com/docs/concepts/client#error-codes
          setMessage(`[${ctx.error.code}]: ${ctx.error.message}`);
          // warnレベルだが、ログインエラーは赤で表示させたいのでerrorで設定
          setMessageLevel("error");
        },
      },
    );

    // TODO: Better Auth完全移行後削除
    /*
    login(data.userId, data.password) //
      .catch((error: Error) => {
        // TODO: 仮置きのエラーハンドリング
        // AuthenticationError、BusinessErrorのみをハンドリング するように修正する
        // ログイン失敗時にはバナーメッセージを表示
        setMessage(error.message);
        // warnレベルだが、ログインエラーは赤で表示させたいのでerrorで設定
        setMessageLevel("error");
      });
    */
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
            autoFocus={true}
            error={errors.userId}
            {...register("userId")}
          />
          <LoginInputPassword
            id="password"
            placeholder="パスワード"
            error={errors.password}
            {...register("password")}
          />
        </LoginInputItem>
        <SubmitButton disabled={isSubmitting} size="lg" className="mt-3">
          ログイン
        </SubmitButton>
      </LoginFormArea>
    </>
  );
}
