import type { Metadata } from "next";
import { notoSansJp } from "./_fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo管理アプリ",
  description: "シンプルなTodo管理アプリケーションです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ルートレイアウトにNoto Sans JPフォントを適用
    <html lang="ja">
      <body className={`${notoSansJp.className} antialiased`}>{children}</body>
    </html>
  );
}
