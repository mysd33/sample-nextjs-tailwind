import { generateUUID } from "@/lib/common/utils/idUtils";
import { Todo } from "@/lib/todo/models/todo";

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

export default todos;
