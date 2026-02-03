import { API_BASE_URL } from "@/lib/common/constants/contants";
import {
  PageableResource,
  PageResource,
} from "@/lib/common/resources/pageResource";
import { UserResource } from "@/lib/common/resources/userResource";
import { http, HttpResponse, PathParams } from "msw";
import users from "../mock-data/userData";

const sleepTime = 500;
//const sleepTime = 3000;

export const handlers = [
  // ユーザの取得
  http.get<PathParams, never, UserResource | null>(
    `${API_BASE_URL}/api/v1/users/:id`,
    async ({ params }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const id = params.id as string;
      const user = users.find((u) => u.id === id);
      return HttpResponse.json(user ?? null);
    },
  ),

  // ユーザの一覧取得（クエリパラメータ: ページネーションpageSize, pageNumber）
  http.get<never, never, PageResource<UserResource>>(
    `${API_BASE_URL}/api/v1/users`,
    async ({ request }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const url = new URL(request.url);
      const pageSize = Number(url.searchParams.get("pageSize") ?? "10");
      const pageNumber = Number(url.searchParams.get("pageNumber") ?? "0");
      const offset = pageNumber * pageSize;
      const pagedUsers = users.slice(offset, offset + pageSize);
      const totalSize = users.length;
      const page: PageResource<UserResource> = {
        pageable: {
          pageSize: pageSize,
          pageNumber: pageNumber,
        } as PageableResource,
        content: pagedUsers,
        totalElements: totalSize,
      };
      console.log("Mocked User List:", page);
      return HttpResponse.json(page);
    },
  ),
  // ユーザの登録
  http.post<never, UserResource, never>(
    `${API_BASE_URL}/api/v1/users`,
    async ({ request }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const user = await request.json();
      users.push(user);
      return HttpResponse.json(user, { status: 201 });
    },
  ),
  // ユーザの更新
  http.put<never, UserResource, never>(
    `${API_BASE_URL}/api/v1/users`,
    async ({ request }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const user = await request.json();
      const index = users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        users[index] = user;
      }
      return HttpResponse.json();
    },
  ),
  // ユーザの削除
  http.delete<PathParams, never, never>(
    `${API_BASE_URL}/api/v1/users/:id`,
    async ({ params }) => {
      // サーバ処理を疑似するため、0.5秒待機
      await new Promise((resolve) => setTimeout(resolve, sleepTime));
      const id = params.id as string;
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users.splice(index, 1);
      }
      return HttpResponse.json();
    },
  ),
];
