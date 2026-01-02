import type { Metadata } from "next";
import "./globals.css";
import MainContainer from "@/components/layout/MainContainer";

export const metadata: Metadata = {
  title: "Todo管理アプリ",
  description: "シンプルなTodo管理アプリケーションです。",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {header}
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
