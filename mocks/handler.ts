import { User } from "@/lib/common/models/user";
import { generateUUID } from "@/lib/common/utils/idUtils";
import { Todo } from "@/lib/todo/models/todo";
import { http, HttpResponse, PathParams } from "msw";
// MSWのHandlerを定義する
// https://mswjs.io/docs/basics/mocking-responses

const API_BASE_URL = "http://localhost:3000";
// ダミーストア
const users: User[] = [
  {
    id: "yamada@xxx.co.jp",
    name: "山田太郎",
    birthday: new Date("1990-01-01"),
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura@xxx.co.jp",
    name: "田村一郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura2@xxx.co.jp",
    name: "田村二郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura3@xxx.co.jp",
    name: "田村三郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura4@xxx.co.jp",
    name: "田村四郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura5@xxx.co.jp",
    name: "田村五郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura6@xxx.co.jp",
    name: "田村六郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura7@xxx.co.jp",
    name: "田村七郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura8@xxx.co.jp",
    name: "田村八郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura9@xxx.co.jp",
    name: "田村九郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura10@xxx.co.jp",
    name: "田村十郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "yamada2@xxx.co.jp",
    name: "山田太郎2",
    birthday: new Date("1990-01-01"),
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura11@xxx.co.jp",
    name: "田村一郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura12@xxx.co.jp",
    name: "田村二郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura13@xxx.co.jp",
    name: "田村三郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura14@xxx.co.jp",
    name: "田村四郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura15@xxx.co.jp",
    name: "田村五郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura16@xxx.co.jp",
    name: "田村六郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura17@xxx.co.jp",
    name: "田村七郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura18@xxx.co.jp",
    name: "田村八郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura19@xxx.co.jp",
    name: "田村九郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura20@xxx.co.jp",
    name: "田村十郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "yamada3@xxx.co.jp",
    name: "山田太郎3",
    birthday: new Date("1990-01-01"),
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura21@xxx.co.jp",
    name: "田村一郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura22@xxx.co.jp",
    name: "田村二郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura23@xxx.co.jp",
    name: "田村三郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura24@xxx.co.jp",
    name: "田村四郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura25@xxx.co.jp",
    name: "田村五郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura26@xxx.co.jp",
    name: "田村六郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura27@xxx.co.jp",
    name: "田村七郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura28@xxx.co.jp",
    name: "田村八郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura29@xxx.co.jp",
    name: "田村九郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura30@xxx.co.jp",
    name: "田村十郎",
    birthday: new Date("1986-11-05"),
    password: "password",
    isAdmin: false,
  },
];

const todos: Todo[] = [
  // ダミーの初期データ
  {
    id: generateUUID(),
    title: "牛乳を買う",
    finished: false,
    createAt: new Date(),
  },
  {
    id: generateUUID(),
    title: "メールを読む",
    finished: true,
    createAt: new Date(),
  },
];

// TODO: URLは仮置き
export const handlers = [
  // TODO: ログインAPIのモックを作成

  // TODO取得
  http.get<PathParams, never, Todo>(
    `${API_BASE_URL}/api/v1/todo/:id`,
    async ({ params }) => {
      const todo = todos.find((t) => t.id === params.id);
      return HttpResponse.json(todo ?? null);
    },
  ),
  // TODO一覧の取得
  http.get<never, never, Todo[]>(`${API_BASE_URL}/api/v1/todo`, async () => {
    return HttpResponse.json(todos);
  }),

  // TODOの登録
  http.post<never, Todo, never>(
    `${API_BASE_URL}/api/v1/todo`,
    async ({ request }) => {
      const todo = (await request.json()) as Todo;
      // todoタイトルが'validationerror'の時は、業務エラーのレスポンスを返す
      if (todo.title === "validationerror") {
        return HttpResponse.json(
          {
            code: "w.ex.2001",
            message: "TODOのタイトルが不正です。",
          },
          { status: 400 },
        );
      }
      // todoタイトルが'bizerror'か登録件数が5件の時は、業務エラーのレスポンスを返す
      if (todo.title === "bizerror" || todos.length >= 5) {
        return HttpResponse.json(
          {
            code: "w.ex.5001",
            message: "TODOの登録は5件までしかできません。",
          },
          { status: 400 },
        );
      }
      // syserrorの時は、システムエラーのレスポンスを返す
      if (todo.title === "syserror") {
        return HttpResponse.json(
          {
            code: "e.ex.9002",
            message: "TODOサービスでシステムエラーが発生しました。",
          },
          { status: 500 },
        );
      }
      // 本来サーバ登録時に設定される値をクライアントでダミー値を設定
      todo.id = generateUUID();
      todo.finished = false;
      todo.createAt = new Date();
      // スタブ実装として、piniaのローカルストレージのストアにTodoを追加
      todos.push(todo);
      return HttpResponse.json(todo, { status: 201 });
    },
  ),

  // TODOの完了
  http.put<never, Todo, never>(
    `${API_BASE_URL}/api/v1/todo`,
    async ({ request }) => {
      const todo = (await request.json()) as Todo;
      const index = todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        todos[index] = todo;
      }
      return HttpResponse.json();
    },
  ),

  // TODOの削除
  http.delete<PathParams, never, never>(
    "/api/v1/todo/:id",
    async ({ params }) => {
      const id = params.id as string;
      const index = todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
      }
      return HttpResponse.json();
    },
  ),
  // TODO: ユーザの一覧取得APIのモックを作成
  // TODO: ユーザの登録APIのモックを作成
  // TODO: ユーザの更新APIのモックを作成
  // TODO: ユーザの削除APIのモックを作成
];
