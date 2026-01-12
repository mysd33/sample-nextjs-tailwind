import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";

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
        className={
          "group relative mr-2 inline-flex h-5 w-9 items-center rounded-full shadow-xs focus:border-blue-400 focus:ring-3 focus:ring-blue-300/50 " +
          (enabled ? "bg-blue-600" : "border border-gray-300 bg-white")
        }>
        <span
          aria-hidden="true"
          className={
            "inline-block h-3 w-3 transform rounded-full transition group-focus:bg-blue-400 " +
            (enabled ? "translate-x-5 bg-white" : "translate-x-1 bg-gray-400")
          }
        />
      </Switch>
      <Label>{children}</Label>
    </Field>
  );
}
