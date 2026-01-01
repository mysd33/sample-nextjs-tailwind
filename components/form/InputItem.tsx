import RequiredBadge from "@/components/icons/RequiredBadge";

interface Props {
  label?: string;
  labelFor?: string;
  srOnly?: boolean;
  required?: boolean;
  errors?: string[];
}
export default function InputItem({
  props,
  children,
}: {
  props: Props;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <label>
          {props.label}
          {props.required && <RequiredBadge />}
        </label>
        {children}
        {/* TODO: エラーメッセージ表示 
            <div v-if="isError" class="flow flow-col m-1 text-sm text-red-600">
            <div v-for="error in props.errors" :key="error">{{ error }}</div>
            </div>
        */}
      </div>
    </>
  );
}
