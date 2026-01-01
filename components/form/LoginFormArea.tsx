export default function LoginFormArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <form className="mx-auto flex max-w-80 flex-col">{children}</form>
    </>
  );
}
