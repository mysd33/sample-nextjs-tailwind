export async function register() {
  console.log(
    "--> [instrumentation.ts] register hook called. NEXT_RUNTIME:",
    process.env.NEXT_RUNTIME,
  );
  // 開発環境ではMSWを有効化
  if (
    process.env.NODE_ENV === "development" &&
    process.env.NEXT_RUNTIME === "nodejs"
  ) {
    const { server } = await import("@/mocks/server");
    server.listen({
      onUnhandledRequest: "bypass",
    });
    console.log("--> [instrumentation.ts] MSW server listening started");
  }
}
