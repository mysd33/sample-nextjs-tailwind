import { Metadata } from "next";
import TodoListViewPart from "./_components/TodoListViewPart";
export interface TodoFormInput {
  todoTitle: string;
}

const title = "TODOリスト";
export const metadata: Metadata = {
  title: title,
};

/**
 * Todo管理画面
 */
export default function TodoListView() {
  return <TodoListViewPart title={title} />;
}
