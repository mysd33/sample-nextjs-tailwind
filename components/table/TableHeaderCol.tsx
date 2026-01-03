export default function TableHeaderCol({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <th scope="col" className="border border-gray-300 bg-white px-3 py-2">
      {children}
    </th>
  );
}
