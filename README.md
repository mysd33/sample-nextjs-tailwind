# Next.jsとTailwind CSSを使ったSPAサンプルAP

> [!WARNING]
> 現在、作成中です。

- SPAのサンプルAPです。Next.jsのプロジェクトを作成し、Tailwind CSSを導入しています。

- React、Vue.jsのようなSPAのフレームワークを使ったコンポーネント指向の開発は、従来のMPAの開発とは異なります。

- また、CSSは従来セマンティックなクラス名を使ってスタイリングを行っており、CSSフレームワークのBootstrapもどちらかというとセマンティックな考え方がメインですが、セマンティックな設計アプローチへの課題感から、Tailwind CSSは「ユーティリティファースト」という考え方にもとづき、ユーティリティクラスを使ってスタイリングを行い、コンポーネントレベルの画面の抽象化、共通部品化は、ReactやVue.jsのコンポーネントで行うという考え方になって来ています。

- このサンプルAPでは、2つの考え方の違いによる実装を比較するため、[Spring Boot + Thymeleaf + BootstrapのサンプルAP](https://github.com/mysd33/sample-bff/)と同じ画面を作成して、ソースコードを比較できるようにしてみようと思います。

- Reactでは、昨今[フレームワークを使って開発を始めることを推奨](https://ja.react.dev/learn/creating-a-react-app)しています。このため、Next.js (App Router)を使ってサンプルAPを作成しています。
    - [Next.js](https://nextjs.org/docs) は、Reactのフルスタックフレームワークの1つで、純粋なCSR（クライアントサイドレンダリング）のSPAでの問題点である初回表示速度が遅い改善、SEO対応などが容易にできるようになっています。

- また、Vue.jsとTailwind CSSを使ったSPAのサンプルAPとして、[Vue.jsとTailwind CSSを使ったSPAサンプルAP](https://github.com/mysd33/sample-vue-tailwind/)を作成しています。こちらは、Nuxt.jsまでは導入しておらず純粋なCSRのSPAですので、単純比較が難しいですが、比較対象として参考にしてください。

## サンプルAPの動作確認方法
- 前提条件
    - [Node.js](https://nodejs.org/ja)がインストールされていること
        - wingetの例
        
            ```sh
            winget install -e --id OpenJS.NodeJS
            ```

    - [pnpm](https://pnpm.io/ja/installation)がインストールされていること
        - npm等でインストールしてください
        
            ```sh
            npx pnpm@latest-10 dlx @pnpm/exe@latest-10 setup        
            ```


- 必要なパッケージをインストール

```sh
pnpm install
```

- 開発用サーバーの起動

```sh
pnpm dev
```

- ブラウザで[http://localhost:3000](http://localhost:3000)アクセス

## Storybookの起動方法
> [!WARNING]
> 今後対応予定

- GitHub PagesにStorybookをデプロイして見られるように対応する予定です。

## Vitestによるユニットテストの実行方法
> [!WARNING]
> 今後対応予定

## 画面一覧
> [!WARNING]
> 今後対応予定

> [!NOTE]
> 比較として、完全にHTML、CSSを一致させているわけではなく、だいたいのレイアウト、色が一致するようにしているだけです。ご注意ください。

- 作成している画面は以下の通り。

- GitHub PagesにStorybookをデプロイしてプレビュー見られるようにする予定です。

| 画面名 | 説明 | 画面イメージ | Storybook | Vue+TailWindソースコード | （参考比較）Thymeleaf+Bootstrapソースコード |
| ---- | ---- | ---- | ---- | ---- | ---- |
| ログイン画面 | トップページの画面で、ユーザがログインするための画面。 | [画面](docs/img/screen/screen1.png) | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/login/login.html) |
| メニュー画面 | メニュー画面。ログインユーザのロールによって管理者メニューの表示有無が切り替わる。 | [画面]() | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/menu/menu.html) |
| Todo管理画面 | Todoリストの一覧表示、登録、完了、削除といった操作を実施できる画面。 | [画面](docs/img/screen/screen3.png)  | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/todo/todoList.html) |
| Todo一括登録画面 | Todoリストを記載したCSVファイルをアップロードし、非同期でTodoリストを登録できる画面。 | [画面](docs/img/screen/screen4.png) | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/todo/upload.html)  |
| ユーザ一覧画面 | 登録されているユーザを一覧表示&CSVファイルダウンロードできる画面。 | [画面](docs/img/screen/screen5.png) | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/user/userList.html) |
| ユーザ登録画面 | ユーザを新規登録するための画面。 | [画面](docs/img/screen/screen6.png) | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/user/regist.html) |
| ユーザ詳細画面 | ユーザの詳細情報の表示と情報更新するための画面。 | [画面](docs/img/screen/screen7.png) | [Storybook]() | [ソースコード]() | [ソースコード](https://github.com/mysd33/sample-bff/blob/main/src/main/resources/templates/user/userDetail.html) |

## 画面遷移図
> [!WARNING]
> 今後対応予定

- Next.jsのAppRouterにより以下の画面遷移が実現されています。

![画面遷移図](docs/img/screen-flow.png)

## メッセージ表示
> [!WARNING]
> 今後対応予定

- 正常終了時やエラー時のメッセージおよびバナー等表示できるように対応しています。
- また、比較対象の「Spring Boot + Thymeleaf + Bootstrap」では実装してませんが、モーダルダイアログの表示も試しています。

| メッセージ種類 | 画面イメージ |
| ----------- | ----------- |
| 確認時モーダルダイアログ     | [画面](docs/img/screen/confirm-dialog.png) |
| 完了時情報モーダルダイアログ     | [画面](docs/img/screen/info-dialog.png) |
| 完了時情報メッセージ（バナー表示）     | [画面](docs/img/screen/info-message.png) |    
| クライアント入力エラーメッセージ（フォーカスアウト時、バナー・入力項目のエラー表示）    | [画面](docs/img/screen/client-validation-error-on-blur.png) |
| クライアント入力エラーメッセージ（ボタン押下時、バナー・入力項目のエラー表示）    | [画面](docs/img/screen/client-validation-error.png) |
| サーバ入力エラーメッセージ（バナー表示）         | [画面](docs/img/screen/server-validation-error.png) |
| サーバ業務エラーメッセージ（バナー表示）         | [画面](docs/img/screen/server-business-error.png) |
| サーバシステムエラー時エラーページ表示  | [画面](docs/img/screen/server-system-error.png) |      

# 画面部品
> [!WARNING]
> 今後対応予定

- [components/](components/)フォルダに入っています。
- 作成している画面部品は以下の通り。

- GitHub PagesにStorybookをデプロイしてプレビュー見られるようにする予定です。

> [!WARNING]
> 現在、各部品のStoryBookは作成中です。

| 画面部品 | 説明 | ソースコード | Storybook |
| ---- | ---- | ---- | ---- |
| ヘッダ領域 | 画面ヘッダー部分の表示領域| [ソースコード]() | TBD |
| メイン領域 | メインの表示領域 | [ソースコード]() | TBD |
| フォーム領域  | フォームの表示領域 | [ソースコード]() | TBD |
| メッセージバナー | メッセージ表示用バナー表示領域 | [ソースコード]() | TBD |
| 入力項目領域  | フォームの入力項目表示領域 | [ソースコード]() | TBD |
| 入力の基底部品 | 入力部品共通の基底のコンポーネント | [ソースコード]() | TBD |
| テキスト入力 | テキスト入力部品 | [ソースコード]() | TBD |
| テキスト入力（ログイン画面用） | ログイン画面のレイアウトに合わせたテキスト入力部品 | [ソースコード]() | TBD |
| パスワード入力 | パスワード入力部品 | [ソースコード]() | TBD |
| パスワード入力（ログイン画面用） | ログイン画面のレイアウトに合わせたパスワード入力部品 | [ソースコード]() | TBD |
| 日付入力 | 日付入力部品 | [ソースコード]() | TBD |
| トグルスイッチ | トグルの入力部品　| [ソースコード]() | TBD |
| ファイル入力 | ファイルアップロード入力部品 | [ソースコード]() | TBD |
| ボタン領域 | ボタンを並べて表示する領域 | [ソースコード]() | TBD |
| ボタンの基底部品 | ボタン共通の基底のコンポーネント| [ソースコード]() | TBD |
| メニューボタン | メニュー画面のレイアウトに合わせたリンクボタン | [ソースコード]() | TBD |
| リンクボタン | 画面遷移のリンクボタン | [ソースコード]() | TBD |
| 送信ボタン | フォームの送信ボタン | [ソースコード]() | TBD |
| アクションボタン | フォーム以外でのロジック実行ボタン | [ソースコード]() | TBD |
| テーブル | テーブルの表示領域、ヘッダー部、データ部 | [ソースコード]() | TBD |
| ページネーションリンク | ページネーションのリンクボタン | [ソースコード]() | TBD |
| モーダルダイアログの基底部品 | ダイアログ共通の基底のコンポーネント | TBD | TBD |
| 確認用モーダルダイアログ | 確認ダイアログ | [ソースコード]() | TBD |
| 情報モーダルダイアログ | 完了時等の情報ダイアログ | [ソースコード]() | TBD |

## 追加したプラグイン・ライブラリ
> [!WARNING]
> 今後対応予定

- React関連
    - [Next.js (App Router)](https://nextjs.org/docs)
        - Reactのフルスタックフレームワーク
    - [React Hook Form](https://react-hook-form.com/)
        - フォームの状態管理、入力チェックに使用
    - [React Hook Form Resolvers](https://github.com/react-hook-form/resolvers)
        - ZodとReact Hook Formを連携するために使用
    - [Zod](https://zod.dev/)
        - 入力チェック（スキーマバリデーション）に使用
    - [uuid](https://github.com/uuidjs/uuid)
        - UUIDの生成に使用

- React関連（追加検討中）
    - [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
        - エラーハンドリングに使用する可能性
    - [MUI (Material-UI)](https://mui.com/)
        - UIコンポーネントのライブラリとして使用する可能性
    - [Material Icons](https://mui.com/material-ui/material-icons/)
        - アイコンに使用する可能性
    - [Headless UI](https://headlessui.com/v1/react)
        - モーダルダイアログに使用する可能性
    - [@heroicons/react](https://github.com/tailwindlabs/heroicons?tab=readme-ov-file#react)
        - アイコンに使用する可能性

- Storybook
    - [Storybook](https://storybook.js.org/)
    - [msw-storybook-addon](https://github.com/mswjs/msw-storybook-addon)

- テストツール
    - [Vitest](https://vitest.dev/)
    - [MSW（Mock Service Worker）](https://mswjs.io/)
        - APIのモックサーバーを立てるために使用
    
- Tailwind CSSプラグイン
    - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)    

## (参考) ブランクプロジェクトのセットアップ方法
- Vue.jsとTailwind CSSを使ったブランクプロジェクトの作成手順は以下の通り

### Next.jsのプロジェクト作成

- pnpmを使ってプロジェクトを作成

```sh
pnpm create next-app@latest sample-nextjs-tailwind
# 推奨設定で進める
```

### tailwindcss/formsのインストール
> [!WARNING]
> 今後対応予定

- 以下のコマンドを実行

```sh
pnpm install -D @tailwindcss/forms
```

- app/global.cssに以下を追記

```css
@import 'tailwindcss';

@plugin '@tailwindcss/forms';
```

### Storybookのセットアップ
> [!WARNING]
> 今後対応予定


- 以下のコマンドを実行

```sh
# storybookの初期化
npx storybook@latest init
```

- 「stories」、「storybook-static」フォルダは、サンプルのコンポーネントとストーリーなので、学習後、不要になったら削除してよい

```sh
# TailwindCSSと統合するための設定を追加
npx storybook@latest add @storybook/addon-styling-webpack
```

- MSWをインストールし、Storybookアドオンmsw-storybook-addonをインストール

```sh
# MSW(Mock Service Worker)
pnpm install msw@latest --save-dev
npx msw init public --save

# msw-storybook-addon
pnpm install msw-storybook-addon -D
```

- .storybook/preview.jsに、以下を追記

```js
TBD: 今後整理
```

- .storybook/main.jsに、以下を追記

```ts
…
const config: StorybookConfig = {
  …
  framework: {
    …  
  },
  //publicフォルダのmockServiceWorker.jsを認識できるよう、staticDirsを追記
  staticDirs: ['../public'],
}
export default config

```

### Github Pagesを使ってStorybookを公開する設定
> [!WARNING]
> 今後対応予定

- Github Pagesを使ってStorybookを公開したい場合は、[Storybookのドキュメント](https://storybook.js.org/docs/sharing/publish-storybook#publish-storybook-to-other-services)や[Deploy Storybook to GitHub Pagesのドキュメント](https://github.com/bitovi/github-actions-storybook-to-github-pages)を参考に以下の設定を行う。

    - 「.github/workflows」フォルダにGitHub Actionsのワークフローを作成
        - [ワークフローの記載例（deploy-github-pages.yml）](.github/workflows/deploy-github-pages.yml)

    - GitHubのリポジトリの「Settings」の「Pages」にて、GitHub Pagesの設定を行う
        - 「Build and deployment」の「Source」を「GitHub Actions」に設定
        - ワークフローが正常に終了すると、「https://(ユーザ名).github.io/(リポジトリ名)」というURLでStorybookが公開される
            - 本サンプルでは「[https://mysd33.github.io/sample-vue-tailwind](https://mysd33.github.io/sample-vue-tailwind)」というURLで公開されている

### その他、ライブラリインストール
> [!WARNING]
> 今後対応予定

- 以下のコマンドで、上記の手順ではインストールされないライブラリをインストール
    
```sh
# React Hook Form
pnpm add react-hook-form

# React Hook Form Resolvers
pnpm add @hookform/resolvers

# Zod
pnpm add zod

# uuid
pnpm add uuid
```

- 以下は、いずれかの利用を検討中

```sh
# MUI (Material-UI)、Material Icons
pnpm add @mui/material @emotion/react @emotion/styled
```

```sh
# Headlress UI
pnpm add @headlessui/react

# Heroicons
pnpm add @heroicons/react
```

## (参考) gitの設定
- TypeScriptでは一般的にファイル名をキャメルケースが良いとされている。Vueのコンポーネントはパスカルケースが一般的である。
- 小文字と大文字を誤ったファイル名を後で変更するときに、gitのデフォルトでは、大文字と小文字を区別しないので、gitの設定を変更しておかないと、import文のファイル名が変更されているのに、gitサーバ上のファイル名が大文字のままといった問題が発生しうる。

- 以下のコマンドで行うことで、大文字小文字を区別するように設定できる。

```sh
cd sample-nextjs-tailwind　# プロジェクトのルートディレクトリに移動
git config -l --local | grep core.ignorecase

# trueになっていることを確認
core.ignorecase=true
```

```sh
# falseに変更
git config core.ignorecase false
```

## (参考) インストールするとよいツール
### Chorom拡張機能
- [React.js devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
    - React.jsのコンポーネント構造や状態を確認できる

### VSCodeの拡張機能
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - setting.jsonに以下を追記
        - VSCodeで、vueファイルもインテリセンスが効くようにtailwindCSS.includeLanguagesを設定
        - cssファイル中の@pluginや@applyに警告がでないように、files.associationsを設定

    ```json
    "tailwindCSS.includeLanguages": {      
        "typescriptreact": "html",
    },
    "files.associations": {
      "*.css": "tailwindcss"
    },
    ```

- [Preitter - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

    - Prettierのプラグインとして、[Prettier plugin for Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)もインストールするとよい。

        ```sh
        pnpm install -D prettier prettier-plugin-tailwindcss
        ```    

    - .prettierrcに以下の設定を追加すると、Tailwind CSSのクラス名のフォーマットが適用される。
        - pluginsに"prettier-plugin-tailwindcss"を追加
        - プラグインと直接関係ないが、bracketSameLineをtrueに設定して、閉じタグが同じ行に表示されるようにもしておく。        

    ```json
    {
      …          
      "bracketSameLine": true,
      "plugins": ["prettier-plugin-tailwindcss"]
    }
    ```    

    - .prettierignoreを追加して、markdownファイルに対するPrettierによる自動フォーマットを無効化
    
    ```json
    *.md
    ```    

    - tsファイルやtsxファイルが、VSCodeでも自動保存時にPrettierでフォーマットされるように、settings.jsonに以下を追記

    ```json
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },     
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    }, 
    ```

- [EditorConfig for AWS](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
    - [.editorconfig](.editorconfig)に書かれた設定をもとにインデントの種類やインデントの大きさ、改行コードなどを自動で統一し、コーディングスタイルの一貫性を保つことができる。
        - Prettierで対応されてない、TypeScript以外等の様々な形式ファイルに対しても設定を行うことができる。
    - Prettierも.editorconfigをサポートしており、EditorConfigとPrettierは共存できるそうです。
    - プロジェクト内に .editorconfig ファイルがある場合、Prettier はそれを解析し、そのプロパティを対応するPrettierの設定に変換します。この設定は、.prettierrc等によって上書かれるそうです。
        - https://prettier.io/docs/configuration.html#editorconfig

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


