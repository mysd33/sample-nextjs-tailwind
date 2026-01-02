interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export default function LoginFormArea({ onSubmit, children }: Props) {
  return (
    <>
      <form className="mx-auto flex max-w-80 flex-col" onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
}
