/**
 * フォーム領域
 */
export default function FormArea({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* TODO: onSubmitの実装 */}
      <form className="grid grid-cols-2 gap-6 text-left">{children}</form>
    </>
  );
}
