// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネント
"use client";
import { UserRegistrationFormInput } from "@/app/users/_lib/userRegistrationFormInput";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import InformationModalDialog from "@/components/dialog/InformationModalDialog";
import FormArea from "@/components/form/FormArea";
import InputDate from "@/components/form/InputDate";
import InputItem from "@/components/form/InputItem";
import InputPassword from "@/components/form/InputPassword";
import InputText from "@/components/form/InputText";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { registerUser } from "@/lib/users/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";

/**
 * ユーザ登録画面
 */
export default function UserRegistrationViewPart() {
  // 画面遷移用のフック
  const router = useRouter();
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
    formState: { isSubmitting, errors },
    handleSubmit,
    trigger,
  } = useForm<UserRegistrationFormInput>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  // パスワードおよび確認パスワードフィールド変更時に双方のエラーを再評価
  const handlePasswordChange = async () => {
    await trigger(["password", "confirmPassword"]);
  };

  // 登録完了ダイアログの表示・非表示状態管理
  const [isRegstrationCompleteDialogOpen, setIsRegistrationCompleteDialogOpen] =
    useState(false);

  // 入力チェック成功時
  const onValidSubmit = async (data: UserRegistrationFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel(undefined);
    console.log("ユーザ登録データ:", data);
    await registerUser(data);
    // 登録完了ダイアログを表示
    setIsRegistrationCompleteDialogOpen(true);
  };
  // 登録完了ダイアログのOKボタンクリック時の処理
  const handleRegistrationCompleteDialogOKButtonClick = () => {
    // ユーザ一覧画面へ遷移
    router.push("/users");
  };

  // 入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<UserRegistrationFormInput>) => {
    console.log("入力エラー", errors);
    setMessageLevel("validation");
  };

  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>();
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <MessageBanner level={messageLevel} message={message} />
      <FormArea onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
        <InputItem
          label="ユーザーID"
          labelFor="userId"
          required={true}
          error={errors.userId}>
          <InputText
            id="userId"
            autoFocus={true}
            error={errors.userId}
            {...register("userId")}
          />
        </InputItem>
        <InputItem
          label="ユーザー名"
          labelFor="userName"
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
            onBlur={handlePasswordChange}
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
            onBlur={handlePasswordChange}
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
          <ToggleSwitch name="isAdmin" control={control}>
            管理者
          </ToggleSwitch>
        </InputItem>
        <ButtonArea>
          <SubmitButton disabled={isSubmitting}>ユーザ登録</SubmitButton>
        </ButtonArea>
      </FormArea>

      <InformationModalDialog
        title="ユーザ情報登録完了"
        message="ユーザ情報を登録しました。"
        isOpen={isRegstrationCompleteDialogOpen}
        setIsOpen={setIsRegistrationCompleteDialogOpen}
        onOkButtonClicked={handleRegistrationCompleteDialogOKButtonClick}
      />
    </>
  );
}
