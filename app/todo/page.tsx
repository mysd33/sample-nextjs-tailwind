// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネント
"use client";

import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import InputText from "@/components/form/InputText";
import { Todo } from "@/lib/todo/models/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TodoItem from "./_components/TodoItem";
import { createTodo, deleteTodo, finishTodo } from "@/lib/todo/actions";

export interface TodoFormInput {
  todoTitle: string;
}

/**
 * Todo管理画面
 */
export default function TodoListView() {
  // Zodを使った入力チェックのスキーマ定義
  const schema = z.object({
    todoTitle: z.string().min(1, "Todoタイトルは必須入力です。"),
  });

  // react-hook-formの定義
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
  } = useForm<TodoFormInput>({
    resolver: zodResolver(schema),
  });

  // TODOリストの状態管理
  const [todos, setTodos] = useState<Todo[]>([]);
  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>("");
  const [message, setMessage] = useState<string>("");

  // 入力チェック成功時
  const onValidSubmit = async (data: TodoFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel("");
    // ビジネスロジック実行
    createTodo(data.todoTitle)
      .then((newTodos) => {
        // TODO一覧を更新
        setTodos(newTodos);
        // バナーメッセージの表示
        setMessage("作成しました。");
        setMessageLevel("info");
        // フォームのリセット
        reset();
      })
      .catch((error) => {
        // TODO: 業務エラーのハンドリング
      });
  };

  // 入力エラー時
  const onInvalidSubmit = () => {
    setMessageLevel("validation");
  };

  // 完了処理完了時
  const onFinish = (todoId: string) => {
    console.log("TODO完了:" + todoId);
    // ビジネスロジック実行
    finishTodo(todoId)
      .then((newTodos) => {
        // TODO一覧を更新
        setTodos(newTodos);
        // バナーメッセージの表示
        setMessage("完了しました。");
        setMessageLevel("info");
      })
      .catch((error) => {
        // TODO: 業務エラーのハンドリング
      });
  };

  // 削除処理完了時
  const onDelete = (todoId: string) => {
    console.log("TODO削除:" + todoId);
    // ビジネスロジック実行
    deleteTodo(todoId)
      .then((newTodos) => {
        // TODO一覧を更新
        setTodos(newTodos);
        // バナーのメッセージ表示
        setMessage("削除しました。");
        setMessageLevel("info");
      })
      .catch((error) => {
        //TODO: 業務エラーのハンドリング
      });
  };

  return (
    <>
      <MessageBanner message={message} level={messageLevel} />

      {/* TODO: formは SimpleFormAreaというコンポーネント化  */}
      <form
        className="mb-3 flex flex-row gap-10"
        onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
        <InputItem className="basis-2/3 text-left" error={errors.todoTitle}>
          <InputText
            id="todoTitle"
            autoFocus={true}
            error={errors.todoTitle}
            {...register("todoTitle")}
          />
        </InputItem>
        <ButtonArea className="basis-1/3 text-left">
          <SubmitButton disabled={isSubmitting}>作成</SubmitButton>
        </ButtonArea>
      </form>
      <hr />
      <div className="mt-3 text-left">
        <ul className="list-disc">
          {/* TODO: onFinishとonDeleteの実装 */}
          {todos.map((todo) => (
            <li key={todo.id} className="ml-10">
              <TodoItem todo={todo} onFinish={onFinish} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
