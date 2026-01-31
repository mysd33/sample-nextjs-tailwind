import LinkButton from "@/components/button/LinkButton";
import React from "react";

type Props = Omit<React.ComponentProps<typeof LinkButton>, "size">;

/**
 * メニューボタン
 */
export default function MenuButton(props: Props) {
  return (
    <LinkButton {...props} className={`mt-12 ${props.className}`} size="lg">
      {props.children}
    </LinkButton>
  );
}
