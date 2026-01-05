"use client";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import FormArea from "@/components/form/FormArea";
import { Todo } from "@/lib/todo/models/todo";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const [finished, setFinished] = useState<boolean>(todo.finished ?? false);
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();

  // TODO: 完了ボタン押下時の処理の実装
  const onClickFinishButton = () => {
    console.log("完了:", todo.id);
    setFinished(true);
  };
  // TODO: 削除ボタン押下時の処理の実装
  const onClickDeleteButton = () => {
    console.log("削除:", todo.id);
  };

  return (
    <FormArea>
      <ButtonArea className="pt-2">
        <span className={`pt-2 ${finished ? "line-through" : ""}`}>
          {todo.title}
        </span>
        {!finished && (
          <SubmitButton
            disabled={isSubmitting}
            onClick={handleSubmit(onClickFinishButton)}>
            完了
          </SubmitButton>
        )}
        <SubmitButton
          disabled={isSubmitting}
          onClick={handleSubmit(onClickDeleteButton)}>
          削除
        </SubmitButton>
      </ButtonArea>
    </FormArea>
  );
}
