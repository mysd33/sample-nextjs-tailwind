import { API_BASE_URL } from "@/lib/common/constants/contants";
import { Todo } from "../models/todo";

/**
 * Todoリストを管理するRepositoryのクラス
 */
export class TodoRepository {
  private static instance: TodoRepository;
  private constructor() {}
  /**
   * Todoリストを管理するRepositoryのStubクラスのインスタンスを取得する
   * @returns Todoリストを管理するRepositoryのStubクラスのインスタンス
   **/
  public static getInstance(): TodoRepository {
    if (!TodoRepository.instance) {
      TodoRepository.instance = new TodoRepository();
    }
    return TodoRepository.instance;
  }

  /**
   * IDを指定してTodoを取得する
   * @param id ID
   * @returns Todo
   */
  public async findOne(id: string): Promise<Todo | null> {
    const res = await fetch(`${API_BASE_URL}/api/v1/todo/${id}`);
    if (!res.ok) {
      // TOOD: エラー処理
    }
    const todo: Todo | undefined = await res.json();
    return todo ?? null;
  }

  /**
   * Todoリストを取得する
   * @returns Todoリスト
   */
  public async findAll(): Promise<Todo[]> {
    const res = await fetch(`${API_BASE_URL}/api/v1/todo`, {
      // TODOを削除しても、一覧がキャッシュされてデータ残ってしまうので、
      // no-storeを指定して毎回最新の情報を取得する
      cache: "no-store",
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
    const todos: Todo[] = await res.json();
    return todos;
  }

  /**
   * Todoを作成する
   * @param todo Todo
   */
  public async create(todo: Todo): Promise<Todo> {
    const res = await fetch(`${API_BASE_URL}/api/v1/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
    const createdTodo: Todo = await res.json();
    return createdTodo;
  }

  /**
   * TODOを更新する
   * @param todo Todo
   */
  public async update(todo: Todo): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/v1/todo`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
    return;
  }

  /**
   * TODOを削除する
   * @param id ID
   */
  public async delete(id: string): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/v1/todo/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      // TOOD: エラー処理
    }
    return;
  }
}
