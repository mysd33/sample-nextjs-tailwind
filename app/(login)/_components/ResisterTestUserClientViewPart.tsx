"use client";
import BaseButton from "@/components/button/BaseButton";
import InformationModalDialog from "@/components/dialog/InformationModalDialog";
import { useState } from "react";

export default function RegisterTestUserClientViewPart() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const { register } = await import("../_lib/resisterTestUser");

    register()
      .then(() => {
        setTitle("テストユーザ登録完了");
        setMessage(
          "テストユーザの登録が完了しました。ログインフォームからログインしてください。",
        );
      })
      .catch((error) => {
        setTitle("テストユーザ登録失敗");
        setMessage(`${error.message}`);
      })
      .finally(() => {
        setIsOpen(true);
      });
  };

  return (
    <>
      <BaseButton onClick={handleClick} className="my-3">
        テストユーザ登録
      </BaseButton>
      <InformationModalDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        message={message}></InformationModalDialog>
    </>
  );
}
