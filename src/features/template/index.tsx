import React, { useState } from "react";
import { Header } from "../../componets/header";
import { LeftBar } from "../../componets/leftBar";
import { Tag } from "../../componets/tag";
import { cardList, tagList } from "../../data/template";

export const Template = React.memo(() => {
  const [activeTag, setActiveTag] = useState("Image");

  const list =
    activeTag == "All"
      ? cardList
      : cardList.filter((id) => id.tag == activeTag);

  return (
    <div className="grid grid-cols-12" style={{ height: "100vh" }}>
      <LeftBar></LeftBar>
      <div className="grid col-span-1"></div>
      <div className="grid col-span-9 py-12">
        <div className="flex flex-col">
          <Header name="Templates"></Header>
          <div className="flex mb-6 gap-4 tag-list">
            {tagList.map((item, id) => (
              <Tag
                key={id}
                name={item}
                activeTag={activeTag}
                setActiveTag={setActiveTag}
              ></Tag>
            ))}
          </div>
          <div className="grid grid-cols-6 place-items-center gap-6 list">
            {list.map((item, id) => (
              <div className="flex flex-col" key={id}>
                <img
                  src={item.img}
                  alt="card image"
                  className="h-72 rounded-2xl"
                />
                <p className="truncate w-48 sm:text-sm template-text">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid col-span-1"></div>
    </div>
  );
});
