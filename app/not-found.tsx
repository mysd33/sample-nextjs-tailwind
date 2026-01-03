import LinkButton from "@/components/button/LinkButton";

/**
 * メニュー画面
 */
export default function NotFoundView() {
  return (
    <>
      <div>
        <h1 className="text-2xl">[404] Not Found</h1>
      </div>
      <LinkButton className="mt-3" forwardViewURL="/">
        トップページへ戻る
      </LinkButton>
    </>
  );
}
