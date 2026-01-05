/**
 * フォーム領域
 */
export default function FormArea(
  props: React.FormHTMLAttributes<HTMLFormElement>,
) {
  return (
    <>
      <form
        {...props}
        className={`grid grid-cols-2 gap-6 text-left ${props.className ?? ""}`}>
        {props.children}
      </form>{" "}
    </>
  );
}
