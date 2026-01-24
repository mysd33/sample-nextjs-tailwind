"use client";

import InformationModalDialog from "@/components/dialog/InformationModalDialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * ユーザ削除後に表示するフォールバックダイアログ
 * ユーザ情報削除すると詳細画面に表示できる情報がなくなるため、Fallbackとしてダイアログを表示する。

 */
export default function UserDeletedFallbackDialog() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  /**
   * OKボタンクリック時の処理
   */
  const handleOkButtonClicked = () => {
    setIsOpen(false);
    router.push("/users");
  };

  return (
    <InformationModalDialog
      title="ユーザ削除完了"
      message="ユーザ情報を削除しました。ユーザ一覧へ遷移します。"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onOkButtonClicked={handleOkButtonClicked}
    />
  );
}
