import { API_BASE_URL } from "@/lib/common/constants/contants";
import {
  PageableResource,
  PageResource,
} from "@/lib/common/resources/pageResource";
import { UserResource } from "@/lib/common/resources/userResource";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { http, HttpResponse } from "msw";
import UserListView from "./page";

/**
 * ## ユーザー一覧画面
 *
 */
const meta = {
  component: UserListView,
  tags: ["autodocs"],
  parameters: {
    msw: {
      handlers: [
        http.get<never, never, PageResource<UserResource>>(
          `${API_BASE_URL}/api/v1/users`,
          async ({ request }) => {
            // サーバ処理を疑似するため、0.5秒待機
            const url = new URL(request.url);
            const pageSize = Number(url.searchParams.get("pageSize") ?? "10");
            const pageNumber = Number(
              url.searchParams.get("pageNumber") ?? "0",
            );
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
      ],
    },
  },
} satisfies Meta<typeof UserListView>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ユーザー一覧画面の表示
 */
export const Default: Story = {
  args: {
    searchParams: Promise.resolve({ pageNumber: "0", pageSize: "5" }),
  },
};

// ダミーストア
const users: UserResource[] = [
  {
    id: "yamada@xxx.co.jp",
    name: "山田太郎",
    birthday: "1990-01-01",
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura@xxx.co.jp",
    name: "田村一郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura2@xxx.co.jp",
    name: "田村二郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura3@xxx.co.jp",
    name: "田村三郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura4@xxx.co.jp",
    name: "田村四郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura5@xxx.co.jp",
    name: "田村五郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura6@xxx.co.jp",
    name: "田村六郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura7@xxx.co.jp",
    name: "田村七郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura8@xxx.co.jp",
    name: "田村八郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura9@xxx.co.jp",
    name: "田村九郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura10@xxx.co.jp",
    name: "田村十郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "yamada2@xxx.co.jp",
    name: "山田太郎2",
    birthday: "1990-01-01",
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura11@xxx.co.jp",
    name: "田村一郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura12@xxx.co.jp",
    name: "田村二郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura13@xxx.co.jp",
    name: "田村三郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura14@xxx.co.jp",
    name: "田村四郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura15@xxx.co.jp",
    name: "田村五郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura16@xxx.co.jp",
    name: "田村六郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura17@xxx.co.jp",
    name: "田村七郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura18@xxx.co.jp",
    name: "田村八郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura19@xxx.co.jp",
    name: "田村九郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura20@xxx.co.jp",
    name: "田村十郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "yamada3@xxx.co.jp",
    name: "山田太郎3",
    birthday: "1990-01-01",
    password: "password",
    isAdmin: true,
  },
  {
    id: "tamura21@xxx.co.jp",
    name: "田村一郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura22@xxx.co.jp",
    name: "田村二郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura23@xxx.co.jp",
    name: "田村三郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura24@xxx.co.jp",
    name: "田村四郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura25@xxx.co.jp",
    name: "田村五郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura26@xxx.co.jp",
    name: "田村六郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura27@xxx.co.jp",
    name: "田村七郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura28@xxx.co.jp",
    name: "田村八郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura29@xxx.co.jp",
    name: "田村九郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
  {
    id: "tamura30@xxx.co.jp",
    name: "田村十郎",
    birthday: "1986-11-05",
    password: "password",
    isAdmin: false,
  },
];
