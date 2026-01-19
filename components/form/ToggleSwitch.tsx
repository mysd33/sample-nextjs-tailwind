import { Field, Label, Switch } from "@headlessui/react";
import clsx from "clsx";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  children: React.ReactNode;
  control: Control<T, any, T>;
}

/**
 * トグルスイッチコンポーネント
 */
export default function ToggleSwitch<T extends FieldValues>({
  name,
  children,
  control,
}: Props<T>) {
  return (
    <>
      {/* 参考: refを持たないUIライブラリと、React Hook Form の統合
        https://react-hook-form.com/get-started#IntegratingwithUIlibraries
      */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Field>
            <Switch
              {...field}
              checked={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
              // clsxを利用してclassNameを設定した例
              className={clsx(
                "group relative mr-2 inline-flex h-5 w-9 items-center rounded-full shadow-xs focus:border-blue-400 focus:ring-3 focus:ring-blue-300/50",
                {
                  "bg-blue-600": field.value,
                  "border border-gray-300 bg-white": !field.value,
                },
              )}>
              <span
                aria-hidden="true"
                className={clsx(
                  "inline-block h-3 w-3 transform rounded-full transition group-focus:bg-blue-400",
                  {
                    "translate-x-5 bg-white": field.value,
                    "translate-x-1 bg-gray-400": !field.value,
                  },
                )}
              />
            </Switch>
            <Label>{children}</Label>
          </Field>
        )}
      />
    </>
  );
}
