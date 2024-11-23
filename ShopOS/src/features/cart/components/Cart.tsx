import React, { useState } from "react";
import { Header } from "../../../componets/header";
import { CartItem } from "./CartItem";
import { LeftBar } from "../../../componets/leftBar";
import { Tag } from "../../../componets/tag";
import { cartList, tagList } from "../../../data/workflows";

export const Workflows = React.memo(() => {
  const [activeTag, setActiveTag] = useState("All");

  const list =
    activeTag == "All"
      ? cartList
      : cartList.filter((id) => id.tag == activeTag);

  console.log(list);
  return (
    <>
      <div className="grid grid-cols-12" style={{ height: "100vh" }}>
        <LeftBar></LeftBar>
        <div className="grid col-span-1"></div>
        <div className="grid col-span-9 py-12">
          <div className="flex flex-col">
            <Header name="Workflows"></Header>
            <div className="flex mb-6 gap-3 flex-wrap tag-list">
              {tagList.map((item, id) => (
                <Tag
                  key={id}
                  name={item}
                  activeTag={activeTag}
                  setActiveTag={setActiveTag}
                ></Tag>
              ))}
            </div>
            <div className="grid grid-cols-3 place-items-center list">
              {list.map((item, id) => (
                <CartItem
                  key={id}
                  img={item.img}
                  details={item.details}
                  btnText={item.btnText}
                  title={item.title}
                  tag={item.tag}
                ></CartItem>
              ))}
            </div>
          </div>
        </div>
        <div className="grid col-span-1"></div>
      </div>
    </>
  );
});
