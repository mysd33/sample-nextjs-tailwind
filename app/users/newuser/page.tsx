import { Metadata } from "next";
import UserRegistrationViewPart from "./_components/UserRegistrationViewPart";

const title = "ユーザ登録";
export const metadata: Metadata = {
  title: title,
};

/**
 * ユーザ登録画面
 */
export default function UserRegistrationView() {
  return <UserRegistrationViewPart title={title} />;
}
