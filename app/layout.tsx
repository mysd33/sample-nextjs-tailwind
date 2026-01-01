import type { Metadata } from "next";
import "./globals.css";
import HeaderArea from "@/components/layout/HeaderArea";
import MainContainer from "@/components/layout/MainContainer";

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
    <html lang="ja">
      <body>
        <HeaderArea title="TODO管理アプリ" />
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
