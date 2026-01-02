import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import LoginFormArea from "@/components/form/LoginFormArea";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";

export default function Home() {
  return (
    <>
      <LoginFormArea>
        <InputItem>
          <LoginInputText id="userId" placeholder="ユーザID" />
          <LoginInputPassword id="password" placeholder="パスワード" />
        </InputItem>
        <SubmitButton size="lg" className="mt-3">
          ログイン
        </SubmitButton>
      </LoginFormArea>
      {/* TODO:　テーブル */}
    </>
  );
}
