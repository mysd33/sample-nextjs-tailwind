import type { Preview } from "@storybook/nextjs-vite";
import { initialize, InitializeOptions, mswLoader } from "msw-storybook-addon";
import "../app/globals.css";

// MSWの初期化
const options =
  // GitHub Pagesでホストしている場合は、404エラーにならないようmockServiceWorker.jsのアドレスを調整
  location.hostname !== "mysd33.github.io"
    ? ({ onUnhandledRequest: "bypass" } as InitializeOptions)
    : ({
        onUnhandledRequest: "bypass",
        serviceWorker: { url: "/sample-nextjs-tailwind/mockServiceWorker.js" },
      } as InitializeOptions);
initialize(options);

const preview: Preview = {
  // MSWのAddonのLoaderに追加
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // App Routerの設定
    // https://storybook.js.org/docs/get-started/frameworks/nextjs-vite#set-nextjsappdirectory-to-true
    nextjs: {
      appDirectory: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
