import LinkButton from "@/components/button/LinkButton";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";

/**
 * メニュー画面
 */
export default function NotFoundView() {
  return (
    <>
      <HeaderArea title="TODO管理" />
      <MainContainer>
        <div>
          <h1 className="text-2xl">[404] Not Found</h1>
        </div>
        <LinkButton className="mt-3" href="/">
          トップページへ戻る
        </LinkButton>
      </MainContainer>
    </>
  );
}
