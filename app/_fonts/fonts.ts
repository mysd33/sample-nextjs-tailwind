import { Noto_Sans_JP } from "next/font/google";

// Noto Sans JP フォント設定
// 参考: https://s4eclog.com/1040
export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});
