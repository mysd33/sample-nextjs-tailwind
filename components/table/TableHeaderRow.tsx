export default function TableHeaderRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <tr className="bg-gray-300">{children}</tr>;
}
