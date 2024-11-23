import React, { ElementType, useState } from "react";

export const Card = React.memo((props: {
  item: {
      bgColor: string; img: string; icon: ElementType; title: string; details: string 
};
}) => {
  const [warning, setWarning] = useState(true);
  return (
    <div
      className={`flex flex-col my-2 border-2 p-8 rounded-2xl ${
        warning ? '' : props.item.bgColor
      } item`}
      onMouseEnter={() => setWarning(false)}
      onMouseLeave={() => setWarning(true)}
    >
      {warning ? (
        <>
          <props.item.icon size={40} />
          <p className="font-semibold my-4 sm:text-sm md:font-lg">{props.item.title}</p>
          <p className="text-slate-400 sm:text-sm">{props.item.details}</p>
        </>
      ) : (
        <img
          src={props.item.img}
          alt="card image"
          className="w-52 rounded-2xl h-28"
        />
      )}
    </div>
  );
});
