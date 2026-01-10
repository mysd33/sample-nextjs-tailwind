import { generateUUID } from "@/lib/common/utils/idUtils";
import { Todo } from "../models/todo";

const sleepTime = 300;

/**
 * Todoリストを管理するRepositoryのクラス
 */
export class TodoRepository {
  private todos: Todo[] = [
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
    // TODO: 実際には、ユーザ認証処理を呼び出す
    // サーバ処理を疑似するため待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    const todo = this.todos.find((todo) => todo.id === id);
    return todo ? todo : null;
  }

  /**
   * Todoリストを取得する
   * @returns Todoリスト
   */
  public async findAll(): Promise<Todo[]> {
    // TODO: 実際には、ユーザ認証処理を呼び出す
    // サーバ処理を疑似するため待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    // スタブ実装として、piniaのローカルストレージのストアにあるTodoリストを返す
    return this.todos;
  }

  /**
   * Todoを作成する
   * @param todo Todo
   */
  public async create(todo: Todo): Promise<Todo> {
    // TODO: 実際には、ユーザ認証処理を呼び出す
    // サーバ処理を疑似するため待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    // 本来サーバ登録時に設定される値をクライアントでダミー値を設定
    todo.id = generateUUID();
    todo.finished = false;
    todo.createAt = new Date();

    // スタブ実装として、piniaのローカルストレージのストアにTodoを追加
    this.todos.push(todo);
    return todo;
  }

  /**
   * TODOを更新する
   * @param todo Todo
   */
  public async update(todo: Todo): Promise<void> {
    // サーバ処理を疑似するため待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
  }

  /**
   * TODOを削除する
   * @param id ID
   */
  public async delete(id: string): Promise<void> {
    // サーバ処理を疑似するため待機
    await new Promise((resolve) => setTimeout(resolve, sleepTime));

    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
