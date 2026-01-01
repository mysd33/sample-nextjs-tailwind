import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import LoginFormArea from "@/components/form/LoginFormArea";
import LoginInputPassword from "@/components/form/LoginInputPassword";
import LoginInputText from "@/components/form/LoginInputText";

export default function Home() {
  return (
    <>
      <LoginFormArea>
        <InputItem props={{}}>
          <LoginInputText id="userId" name="userId" placeholder="ユーザID" />
          <LoginInputPassword
            id="password"
            name="password"
            placeholder="パスワード"
          />
        </InputItem>
        {/* TODO: mt-3を指定するためspanタグを置いているがVueのサンプルと同じようになくしたい */}
        <span className="mt-3"></span>
        <SubmitButton props={{ size: "lg" }}>ログイン</SubmitButton>
      </LoginFormArea>
      {/* TODO:　テーブル */}
    </>
  );
}
