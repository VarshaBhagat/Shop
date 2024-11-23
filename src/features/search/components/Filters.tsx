import React from "react";
import { ElementType } from "react";

export const Filters = React.memo((props: {
  redirect: string;
  text: string;
  icon: ElementType;
}) => {
  return (
    <button
      className="bg-white rounded-3xl px-4 py-2 border-2 flex items-center gap-2  justify-center w-32 max-sm:p-1 max-sm:w-22"
      onClick={() => (window.location.href = props.redirect)}
    >
      <props.icon size={15} />
      <span>{props.text}</span>
    </button>
  );
});
