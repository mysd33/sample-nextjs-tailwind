export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-8">
      <div className="container mx-auto text-center">{children}</div>
    </main>
  );
}
