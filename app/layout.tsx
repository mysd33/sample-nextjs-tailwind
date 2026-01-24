import { server } from "@/mocks/server";
import type { Metadata } from "next";
import { notoSansJp } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Todo管理アプリ",
  },
  description: "シンプルなTodo管理アプリケーションです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 開発環境ではMSWを有効化
  if (process.env.NODE_ENV === "development") {
    server.listen();
  }

  return (
    // ルートレイアウトにNoto Sans JPフォントを適用
    <html lang="ja">
      <body className={`${notoSansJp.className} antialiased`}>{children}</body>
    </html>
  );
}
