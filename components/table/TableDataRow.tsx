export default function TableDataRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <tr className="odd:bg-gray-100 hover:bg-gray-200">{children}</tr>;
}
