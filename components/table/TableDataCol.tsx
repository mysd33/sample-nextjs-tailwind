export default function TableDataCol({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <td scope="col" className="border border-gray-300 p-3">
      {children}
    </td>
  );
}
