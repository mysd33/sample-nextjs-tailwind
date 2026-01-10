"use client";
import ButtonArea from "@/components/button/ButtonArea";
import SubmitButton from "@/components/button/SubmitButton";
import FormArea from "@/components/form/FormArea";
import { Todo } from "@/lib/todo/models/todo";
import { useForm } from "react-hook-form";

interface Props {
  todo: Todo;
  onFinish?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function TodoItem({ todo, onFinish, onDelete }: Props) {
  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useForm();

  // 完了ボタン押下時
  const onClickFinishButton = async () => {
    console.log("完了:", todo.id);
    if (onFinish) {
      onFinish(todo.id!);
    }
  };
  // 削除ボタン押下時
  const onClickDeleteButton = () => {
    console.log("削除:", todo.id);
    if (onDelete) {
      onDelete(todo.id!);
    }
  };

  const finished = todo.finished ?? false;
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
