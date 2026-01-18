import { Metadata } from "next";
import TodoListClientViewPart from "./_components/TodoListClientViewPart";
export interface TodoFormInput {
  todoTitle: string;
}

// タイトル等のページごとのメタデータの設定
const title = "TODOリスト";
export const metadata: Metadata = {
  title: title,
};

/**
 * Todo管理画面
 */
export default function TodoListView() {
  return (
    <>
      {/* TODOリストのフォーム部分（クライアントコンポーネント） */}
      <TodoListClientViewPart title={title} />
    </>
  );
}
