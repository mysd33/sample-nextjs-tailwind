import { Todo } from "@/lib/todo/models/todo";
import { TodoRepository } from "@/lib/todo/repositories/todoRepository";

/**
 * TODOリスト機能を提供するServiceクラス
 */
export class TodoService {
  private static instance: TodoService;
  private constructor(
    private readonly todoRepository: TodoRepository = TodoRepository.getInstance(),
  ) {}
  /**
   * TODOリスト機能を提供するServiceクラスのインスタンスを取得する
   * @returns TODOリスト機能を提供するServiceクラスのインスタンス
   */
  public static getInstance(): TodoService {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  /**
   * IDを指定してTODOを取得する
   * @param id ID
   * @returns TODO
   */
  public async findOne(id: string): Promise<Todo | null> {
    return this.todoRepository.findOne(id);
  }

  /**
   * TODOリストを取得する
   * @returns TODOリスト
   */
  public async findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  /**
   * TODOを追加する
   * @param title タイトル
   */
  public async create(title: string): Promise<void> {
    await this.todoRepository.create({
      title: title,
    });
  }

  /**
   * TODOを完了する
   * @param id ID
   */
  public async finish(id: string): Promise<void> {
    const todo = await this.todoRepository.findOne(id);
    if (!todo) {
      return;
    }
    todo.finished = true;
    await this.todoRepository.update(todo);
  }

  /**
   * TODOを削除する
   * @param id ID
   */
  public async delete(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
