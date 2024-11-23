import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";

export const ProductCard = React.memo((props: {
  item: {
    img: string;
    title: string;
  };
}) => {
  const [isShow, setShow] = useState(true);
  return (
    <div
      className="flex flex-col my-2  rounded-2xl"
      onMouseEnter={() => setShow(false)}
      onMouseLeave={() => setShow(true)}
    >
      <>
        <div className={`rounded-xl h-48  w-48 ${props.item.img} store bg-cover bg-no-repeat`}>
          {!isShow && (
            <div className="flex flex-col h-40 m-4 justify-between">
              <div className="flex justify-between ">
                <div className="text-white font-sm bg-slate-500 px-1 rounded-sm">
                  Demo
                </div>
                <LuPencil size={20} color="white" />
              </div>
              <button className="bg-white rounded-2xl px-4 py-2">
                Create a Store
              </button>
            </div>
          )}
        </div>
        <p className="font-lg my-2 text-slate-400 truncate sm:text-sm">
          {props.item.title}
        </p>
      </>
    </div>
  );
});
