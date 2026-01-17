import { Field, Label, Switch } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

{
  /** TODO: react-hook-form対応 */
}
export default function ToggleSwitch({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <Field>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        // clsxを利用してclassNameを設定した例
        className={clsx(
          "group relative mr-2 inline-flex h-5 w-9 items-center rounded-full shadow-xs focus:border-blue-400 focus:ring-3 focus:ring-blue-300/50",
          {
            "bg-blue-600": enabled,
            "border border-gray-300 bg-white": !enabled,
          },
        )}>
        <span
          aria-hidden="true"
          className={clsx(
            "inline-block h-3 w-3 transform rounded-full transition group-focus:bg-blue-400",
            {
              "translate-x-5 bg-white": enabled,
              "translate-x-1 bg-gray-400": !enabled,
            },
          )}
        />
      </Switch>
      <Label>{children}</Label>
    </Field>
  );
}
