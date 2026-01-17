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
    <html lang="ja" className={notoSansJp.className}>
      <body>{children}</body>
    </html>
  );
}
