interface Props {
  thead: React.ReactNode;
  tbody: React.ReactNode;
}

export default function TableArea({ thead, tbody }: Props) {
  return (
    <>
      <table className="w-full table-auto border-collapse border border-slate-400 text-left">
        <thead>{thead}</thead>
        <tbody className="bg-white">{tbody}</tbody>
      </table>
    </>
  );
}
