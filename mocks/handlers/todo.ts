import { API_BASE_URL } from "@/lib/common/constants/contants";
import { generateUUID } from "@/lib/common/utils/idUtils";
import { Todo } from "@/lib/todo/models/todo";
import { http, HttpResponse, PathParams } from "msw";
import todos from "../mock-data/todoData";

const sleepTime = 500;
//const sleepTime = 3000;

export const handlers = [
  // TODO取得
  http.get<PathParams, never, Todo>(
    `${API_BASE_URL}/api/v1/todo/:id`,
    async ({ params }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const todo = todos.find((t) => t.id === params.id);
      return HttpResponse.json(todo ?? null);
    },
  ),
  // TODO一覧の取得
  http.get<never, never, Todo[]>(`${API_BASE_URL}/api/v1/todo`, async () => {
    // サーバ処理を疑似するため、0.5秒待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    return HttpResponse.json(todos);
  }),

  // TODOの登録
  http.post<never, Todo, never>(
    `${API_BASE_URL}/api/v1/todo`,
    async ({ request }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
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
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
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
    `${API_BASE_URL}/api/v1/todo/:id`,
    async ({ params }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const id = params.id as string;
      const index = todos.findIndex((t) => t.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
      }
      return HttpResponse.json();
    },
  ),
];
