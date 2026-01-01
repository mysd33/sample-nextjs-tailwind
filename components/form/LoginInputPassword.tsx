interface Props {
  id?: string;
  name: string;
  placeholder?: string;
  focus?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}
export default function LoginInputPassword(props: Props) {
  const commonStyle =
    "mb-[-1px] h-12 rounded-b-lg border shadow-xs read-only:border-transparent read-only:bg-transparent read-only:px-0 read-only:shadow-none focus:z-20 focus:ring-3 read-only:focus:border-transparent read-only:focus:ring-transparent";
  //TODO: 入力エラーの表示
  /*const style = errors.length == 0
          ? 'z-0 border-gray-300 focus:border-blue-400 focus:ring-blue-300/50'
          : 'errorIcon z-20 border-red-600 focus:border-red-400 focus:ring-red-300/50',*/
  const style = `${commonStyle} z-0 border-gray-300 focus:border-blue-400 focus:ring-blue-300/50`;

  return (
    <>
      <input
        id={props.id}
        type="password"
        placeholder={props.placeholder}
        autoFocus={props.focus}
        readOnly={props.readonly}
        disabled={props.disabled}
        className={style}
      />
    </>
  );
}
