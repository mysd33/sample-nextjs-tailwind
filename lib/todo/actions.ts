"use server";

import { Todo } from "@/lib/todo/models/todo";
import { TodoService } from "./services/todoService";

/**
 * TODO一覧取得処理
 */
export async function findTodoList(): Promise<Todo[]> {
  console.log("Server Action: findTodoList");
  // ビジネスロジックの呼び出し
  return await TodoService.getInstance().findAll();
}

/**
 * TODO作成処理
 * @param title Todoのタイトル
 *
 */
export async function createTodo(title: string): Promise<Todo[]> {
  console.log("Server Action: createTodo", { title });
  // ビジネスロジックの呼び出し
  await TodoService.getInstance().create(title);
  // TODO一覧を再取得して返却
  return await TodoService.getInstance().findAll();
}

/**
 * TODO完了処理
 * @param id TodoのID
 */
export async function finishTodo(id: string): Promise<Todo[]> {
  console.log("Server Action: finishTodo", { id });
  // ビジネスロジックの呼び出し
  await TodoService.getInstance().finish(id);
  // TODO一覧を再取得して返却
  return await TodoService.getInstance().findAll();
}

/**
 * TODO削除処理
 * @param id TodoのID
 */
export async function deleteTodo(id: string): Promise<Todo[]> {
  console.log("Server Action: deleteTodo", { id });
  // ビジネスロジックの呼び出し
  await TodoService.getInstance().delete(id);
  // TODO一覧を再取得して返却
  return await TodoService.getInstance().findAll();
}
