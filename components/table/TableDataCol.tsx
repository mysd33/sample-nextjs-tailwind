interface Props {
  children: React.ReactNode;
}

type TableDataColProps = React.TdHTMLAttributes<HTMLTableCellElement> & Props;

/**
 * テーブルのデータ列コンポーネント
 */

export default function TableDataCol(props: TableDataColProps) {
  return (
    <td
      {...props}
      scope="col"
      className={`border border-gray-300 p-3 ${props.className}`}>
      {props.children}
    </td>
  );
}
