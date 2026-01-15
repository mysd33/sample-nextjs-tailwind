"use client";
import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import FormArea from "@/components/form/FormArea";
import InputDate from "@/components/form/InputDate";
import InputItem from "@/components/form/InputItem";
import InputPassword from "@/components/form/InputPassword";
import InputText from "@/components/form/InputText";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { useState } from "react";

/**
 * ユーザ詳細画面
 */
export default function UserDetailView() {
  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>();
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <MessageBanner level={messageLevel} message={message} />
      <FormArea>
        <InputItem label="ユーザーID" labelFor="userId" required={true}>
          <InputText id="userId" name="userId" autoFocus={true} />
        </InputItem>
        <InputItem label="ユーザー名" labelFor="userName" required={true}>
          <InputText id="userName" name="userName" />
        </InputItem>
        <InputItem label="パスワード" labelFor="password" required={true}>
          <InputPassword id="password" name="password" />
        </InputItem>
        <InputItem
          label="確認用パスワード"
          labelFor="confirmPassword"
          required={true}>
          <InputPassword id="confirmPassword" name="confirmPassword" />
        </InputItem>
        <InputItem label="生年月日" labelFor="birthday" required={true}>
          <InputDate id="birthday" name="birthday" />
        </InputItem>
        <InputItem>
          <ToggleSwitch>管理者</ToggleSwitch>
        </InputItem>
        <ButtonArea>
          <SubmitButton>ユーザ登録</SubmitButton>
        </ButtonArea>
      </FormArea>

      {/* TODO: ユーザ作成完了ダイアログの追加 */}
    </>
  );
}
