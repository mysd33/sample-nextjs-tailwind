// Form部分は、react-hook-formやuseStateを使用するためクライアントコンポーネント
"use client";

import MessageBanner, { MessageLevel } from "@/components/banner/MessageBanner";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import InputItem from "@/components/form/InputItem";
import InputText from "@/components/form/InputText";
import { generateUUID } from "@/lib/common/utils/idUtils";
import { Todo } from "@/lib/todo/models/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TodoItem from "./_components/TodoItem";

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
  } = useForm<TodoFormInput>({
    resolver: zodResolver(schema),
  });

  // TODOリストの状態管理
  const [todos, setTodos] = useState<Todo[]>([]);
  // バナーメッセージの状態管理
  const [messageLevel, setMessageLevel] = useState<MessageLevel>("");
  const [message, setMessage] = useState<string>("");

  // 入力チェック成功時
  const onValidSubmit = (data: TodoFormInput) => {
    // バナーメッセージのクリア
    setMessage("");
    setMessageLevel("");

    // TODO: サーバアクションでのビジネスロジックの呼び出し
    console.log("TODO作成:", data);
    setTodos([
      ...todos,
      {
        id: generateUUID(),
        title: data.todoTitle,
        finished: false,
        createAt: new Date(),
      },
    ]);
    // バナーメッセージの設定
    setMessage("作成しました。");
    setMessageLevel("info");
  };

  // 入力エラー時
  const onInvalidSubmit = () => {
    setMessageLevel("validation");
  };

  // TODO: 完了処理完了時の実装
  // TODO: 削除処理完了時の実装

  return (
    <>
      <MessageBanner message={message} level={messageLevel} />

      {/* TODO: formは SimpleFormAreaというコンポーネント化  */}
      <form
        className="mb-3 flex flex-row gap-10"
        onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
      >
        <InputItem className="basis-2/3 text-left" error={errors.todoTitle}>
          <InputText
            id="todoTitle"
            focus={true}
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
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
