import React, { ElementType } from "react";

export const DriveLink = React.memo(
  (props: { text: string; icon: ElementType }) => {
    return (
      <button className="bg-white rounded-3xl py-4 border-2 flex items-center gap-2  justify-center w-64 font-lg searchIcon">
        <props.icon size={30} />
        <span className="truncate">{props.text}</span>
      </button>
    );
  }
);
