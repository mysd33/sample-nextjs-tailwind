export default function LoginFormArea(
  props: React.FormHTMLAttributes<HTMLFormElement>,
) {
  return (
    <>
      <form {...props} className="mx-auto flex max-w-80 flex-col">
        {props.children}
      </form>
    </>
  );
}
