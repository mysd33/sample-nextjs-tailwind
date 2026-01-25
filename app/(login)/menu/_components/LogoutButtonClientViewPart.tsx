"use client";
import BaseButton from "@/components/button/BaseButton";
import InformationModalDialog from "@/components/dialog/InformationModalDialog";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButtonClientViewPart() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogoutButtonClick = () => {
    // ログアウト処理をここに実装
    authClient.signOut();
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    router.push("/");
  };
  return (
    <>
      <BaseButton className="mt-12" size="lg" onClick={handleLogoutButtonClick}>
        ログアウト
      </BaseButton>
      <InformationModalDialog
        title={"ログアウトしました"}
        message={""}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOkButtonClicked={handleDialogClose}
      />
    </>
  );
}
