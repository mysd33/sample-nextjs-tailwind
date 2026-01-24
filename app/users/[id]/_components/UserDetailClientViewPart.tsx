// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネント
"use client";
import { UserRegistrationFormInput } from "@/app/users/_lib/UserRegistrationFormInput";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import ConfirmModalDialog from "@/components/dialog/ConfirmModalDialog";
import InformationModalDialog from "@/components/dialog/InformationModalDialog";
import FormArea from "@/components/form/FormArea";
import InputDate from "@/components/form/InputDate";
import InputItem from "@/components/form/InputItem";
import InputPassword from "@/components/form/InputPassword";
import InputText from "@/components/form/InputText";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { User } from "@/lib/common/models/user";
import { deleteUser, updateUser } from "@/lib/users/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";

/**
 * ユーザ詳細画面
 */
export default function UserDetailClientViewPart({
  userProps: userProps,
}: {
  userProps: User;
}) {
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
    defaultValues: {
      // API等から取得したユーザ情報を初期値にセットする
      userId: userProps.id,
      userName: userProps.name,
      birthday: userProps.birthday.toISOString().substring(0, 10),
      isAdmin: userProps.isAdmin,
      password: "",
      confirmPassword: "",
    },
  });

  // パスワードおよび確認パスワードフィールド変更時に双方のエラーを再評価
  const handlePasswordChange = async () => {
    await trigger(["password", "confirmPassword"]);
  };

  // 更新完了ダイアログの表示・非表示状態管理
  const [isUpdateCompleteDialogOpen, setIsUpdateCompleteDialogOpen] =
    useState(false);
  // 削除確認ダイアログの表示・非表示状態管理
  const [isDeleteConfirmDialogOpen, setIsDeleteConfirmDialogOpen] =
    useState(false);
  // 削除完了ダイアログの表示・非表示状態管理
  const [isDeleteCompleteDialogOpen, setIsDeleteCompleteDialogOpen] =
    useState(false);

  // 更新ボタンクリック時の処理
  // 更新ボタンクリック時の入力チェック成功時
  const onValidSubmit = async (data: UserRegistrationFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel(undefined);
    console.log("ユーザ登録データ:", data);
    await updateUser(data);
    // 更新完了ダイアログを表示
    setIsUpdateCompleteDialogOpen(true);
  };

  // 更新完了ダイアログのOKボタンクリック時の処理
  const handleUpdateCompleteDialogOKButtonClick = () => {
    // ユーザ一覧画面へ遷移
    router.push("/users");
  };

  // 更新ボタンクリック時の入力エラー時
  const onInvalidSubmit = (errors: FieldErrors<UserRegistrationFormInput>) => {
    setMessageLevel("validation");
    console.log("エラー情報:", errors);
  };

  // 削除ボタンクリック時の処理
  // 二重送信防止のための削除処理中状態
  const [isDeleteSubmitting, setIsDeleteSubmitting] = useState(false);
  const handleDeleteButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel(undefined);
    // 削除確認ダイアログを表示
    setIsDeleteConfirmDialogOpen(true);
  };

  // 削除確認ダイアログのOKボタンクリック時の処理
  const handleDeleteConfirmDialogOKButtonClick = async () => {
    try {
      // ボタン非活性化のために状態を更新
      setIsDeleteSubmitting(true);
      // ユーザ削除処理の実行
      console.log("ユーザ削除:", userProps.id);
      await deleteUser(userProps.id);
      // 削除完了ダイアログを表示
      setIsDeleteCompleteDialogOpen(true);
    } finally {
      // ボタン活性化状態に戻すために状態を更新
      setIsDeleteSubmitting(false);
    }
  };
  // 削除確認ダイアログのキャンセルボタンクリック時の処理
  const handleDeleteConfirmDialogCancelButtonClick = () => {
    // 特に何もしない
    console.log("確認ダイアログのキャンセルボタンがクリックされました。");
  };
  // 削除完了ダイアログのOKボタンクリック時の処理
  const handleDeleteCompleteDialogOKButtonClick = () => {
    // ユーザ一覧画面へ遷移
    router.push("/users");
  };

  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>();
  const [message, setMessage] = useState<string>("");
  return (
    <>
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
          required={true}
          error={errors.userName}>
          <InputText
            id="userName"
            autoFocus={true}
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
          <SubmitButton
            disabled={isSubmitting}
            onClick={handleSubmit(onValidSubmit, onInvalidSubmit)}>
            ユーザ更新
          </SubmitButton>
          <SubmitButton
            disabled={isDeleteSubmitting}
            danger={true}
            onClick={handleDeleteButtonClick}>
            ユーザ削除
          </SubmitButton>
        </ButtonArea>
      </FormArea>
      <InformationModalDialog
        title="ユーザ情報更新完了"
        message="ユーザ情報を更新しました。"
        isOpen={isUpdateCompleteDialogOpen}
        setIsOpen={setIsUpdateCompleteDialogOpen}
        onOkButtonClicked={handleUpdateCompleteDialogOKButtonClick}
      />
      <ConfirmModalDialog
        title="ユーザ削除確認"
        message="ユーザを削除してもいいですか？"
        isOpen={isDeleteConfirmDialogOpen}
        setIsOpen={setIsDeleteConfirmDialogOpen}
        onOkButtonClicked={handleDeleteConfirmDialogOKButtonClick}
        onCancelButtonClicked={handleDeleteConfirmDialogCancelButtonClick}
      />
      <InformationModalDialog
        title="ユーザ削除完了"
        message="ユーザを削除しました。"
        isOpen={isDeleteCompleteDialogOpen}
        setIsOpen={setIsDeleteCompleteDialogOpen}
        onOkButtonClicked={handleDeleteCompleteDialogOKButtonClick}
      />
    </>
  );
}
