// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネント
"use client";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import LinkButton from "@/components/button/LinkButton";
import SubmitButton from "@/components/button/SubmitButton";
import FormArea from "@/components/form/FormArea";
import InputDate from "@/components/form/InputDate";
import InputItem from "@/components/form/InputItem";
import InputPassword from "@/components/form/InputPassword";
import InputText from "@/components/form/InputText";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FieldErrors, useForm, useWatch } from "react-hook-form";
import * as z from "zod";

interface UserRegistrationFormInput {
  userId: string;
  password: string;
  confirmPassword: string;
  userName: string;
  birthday: string;
  isAdmin?: boolean;
}

/**
 * ユーザ詳細画面
 */
export default function UserDetailViewPart({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  // Zodを使った入力チェックのスキーマ定義
  const schema = z
    .object({
      userId: z
        .email("ユーザIDはメールアドレス形式で入力してください。")
        .min(1, "ユーザIDは必須入力です。"),
      password: z.string().min(1, "パスワードは必須入力です。"),
      confirmPassword: z.string().min(1, "確認用パスワードは必須入力です。"),
      userName: z.string().min(1, "ユーザ名は必須入力です。"),
      birthday: z.string().min(1, "生年月日は必須入力です。"),
      isAdmin: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: "custom",
          message: "パスワードと確認用パスワードが一致しません。",
          path: ["password"],
        });
        ctx.addIssue({
          code: "custom",
          message: "パスワードと確認用パスワードが一致しません。",
          path: ["confirmPassword"],
        });
      }
    });

  // react-hook-formの定義
  const {
    register,
    control,
    trigger,
    clearErrors,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<UserRegistrationFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      userId: id,
      // TOOD: API等から取得したユーザ情報を初期値にセットする
    },
  });

  // TODO: 更新ボタンクリック時の処理
  // 入力チェック成功時
  const onValidSubmit = (data: UserRegistrationFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel(undefined);
    console.log("ユーザ登録データ:", data);
  };

  // TODO: 入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<UserRegistrationFormInput>) => {
    console.log("入力エラー", errors);
    setMessageLevel("validation");
  };

  // TODO: 削除ボタンクリック時の処理

  /* 確認用フィールドが変わったら password のエラーを再評価 */
  const [password, confirmPassword] = useWatch({
    control,
    name: ["password", "confirmPassword"],
  });
  useEffect(() => {
    if (confirmPassword !== undefined) {
      clearErrors("password");
      void trigger("password");
    }
  }, [confirmPassword, clearErrors, trigger]);
  useEffect(() => {
    if (password !== undefined) {
      clearErrors("confirmPassword");
      void trigger("confirmPassword");
    }
  }, [password, clearErrors, trigger]);

  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>();
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <HeaderArea title={title}>
        <LinkButton outline={true} forwardViewURL="/users">
          ユーザ一覧に戻る
        </LinkButton>
      </HeaderArea>
      <MainContainer>
        <MessageBanner level={messageLevel} message={message} />
        <FormArea>
          <InputItem label="ユーザーID" labelFor="userId" error={errors.userId}>
            <InputText
              id="userId"
              readOnly={true}
              error={errors.userId}
              {...register("userId")}
            />
          </InputItem>
          <InputItem
            label="ユーザー名"
            labelFor="userName"
            autoFocus={true}
            required={true}
            error={errors.userName}>
            <InputText
              id="userName"
              error={errors.userName}
              {...register("userName")}
            />
          </InputItem>
          <InputItem
            label="パスワード"
            labelFor="password"
            required={true}
            error={errors.password}>
            <InputPassword
              id="password"
              error={errors.password}
              {...register("password")}
            />
          </InputItem>
          <InputItem
            label="確認用パスワード"
            labelFor="confirmPassword"
            required={true}
            error={errors.confirmPassword}>
            <InputPassword
              id="confirmPassword"
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            />
          </InputItem>
          <InputItem
            label="生年月日"
            labelFor="birthday"
            required={true}
            error={errors.birthday}>
            <InputDate
              id="birthday"
              error={errors.birthday}
              {...register("birthday")}
            />
          </InputItem>
          <InputItem>
            <ToggleSwitch {...register("isAdmin")}>管理者</ToggleSwitch>
          </InputItem>

          <ButtonArea>
            <SubmitButton>ユーザ更新</SubmitButton>
            <SubmitButton danger={true}>ユーザ削除</SubmitButton>
          </ButtonArea>
        </FormArea>
        {/* TODO: ユーザ更新・削除の確認・完了ダイアログの追加 */}
      </MainContainer>
    </>
  );
}
