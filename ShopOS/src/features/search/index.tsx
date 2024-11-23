import React from "react";
import { LeftBar } from "../../componets/leftBar";
import { Filters } from "./components/Filters";
import { BiUpload } from "react-icons/bi";
import { RiRobot3Line } from "react-icons/ri";
import { AiTwotonePicture } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { RiUploadCloudFill } from "react-icons/ri";

export const Search = React.memo(() => {
  return (
    <div className="grid grid-cols-12" style={{ height: "100vh" }}>
      <LeftBar></LeftBar>
      <div className="grid col-span-1"></div>
      <div className="grid col-span-9 py-12 place-items-center">
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 place-items-center">
            <h1 className=" font-bold max-sm:text-sm text-xl">How can I assist you today?</h1>
            <div className="flex w-4/5 justify-center border border-gray-300 p-4 rounded-full  mb-4 mt-2 max-sm:p-1">
              <CiCirclePlus size={30} className="searchIcon" />
              <input
                type="text"
                id="seling"
                className="bg-white text-gray-900 text-sm block w-full px-2 outline-none "
                placeholder="What are we selling today?"
                required
              />
              <RiUploadCloudFill size={30} className="searchIcon" />
            </div>
            <section className="flex gap-8">
              <Filters
                text="upload"
                redirect="/store"
                icon={BiUpload}
              ></Filters>
              <Filters text="agents" redirect="/agents" icon={RiRobot3Line} />
              <Filters
                text="templates"
                redirect="/templates"
                icon={AiTwotonePicture}
              />
            </section>
          </div>
        </div>
      </div>
      <div className="grid col-span-1"></div>
    </div>
  );
});
