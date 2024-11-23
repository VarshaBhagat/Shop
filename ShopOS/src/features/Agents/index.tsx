import  React, { useState } from "react";
import { Header } from "../../componets/header";
import { LeftBar } from "../../componets/leftBar";
import { Tag } from "../../componets/tag";
import { Card } from "./Card";
import { agentsList, tagList } from '../../data/agents';

export const Agent = React.memo(() => {
  const [activeTag, setActiveTag] = useState("All");
  const cardList = agentsList;

  const list =
    activeTag == "All"
      ? cardList
      : cardList.filter((id) => id.tag == activeTag);


  return (
    <>
      <div className="grid grid-cols-12" style={{ height: "100vh" }}>
        <LeftBar></LeftBar>
        <div className="grid col-span-1"></div>
        <div className="grid col-span-9 py-12">
          <div className="flex flex-col">
            <Header name="Agents"></Header>
            <div className="flex mb-6 gap-4 flex-wrap tag-list">
              {tagList.map((item, id) => (
                <Tag
                  key={id}
                  name={item}
                  activeTag={activeTag}
                  setActiveTag={setActiveTag}
                ></Tag>
              ))}
            </div>
            <div className="grid grid-cols-4 place-items-center gap-6 list">
              {list.map((item, id) => (
                <Card item={item} key={id}></Card>
              ))}
            </div>
          </div>
        </div>
        <div className="grid col-span-1"></div>
      </div>
    </>
  );
});
