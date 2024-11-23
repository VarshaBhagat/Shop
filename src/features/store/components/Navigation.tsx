import React, { useCallback } from "react";
import { LeftBar } from "../../../componets/leftBar";
import { Header } from "../../../componets/header";
import { PiGoogleDriveLogoLight } from "react-icons/pi";
import { CiLink } from "react-icons/ci";
import { FaRegPaste } from "react-icons/fa6";
import { DriveLink } from "./DriveLink";
import { GoUpload } from "react-icons/go";

export const Navigation = React.memo(() => {
  const onUpload = useCallback((e) => {
      //Todo : update in store
    
  }, []);
  return (
    <div className="grid grid-cols-12" style={{ height: "100vh" }}>
      <LeftBar></LeftBar>
      <div className="grid col-span-2"></div>
      <div className="grid col-span-7 place-items-center">
        <div className="flex flex-col w-full">
          <Header name="Create a new store"></Header>
          <form>
            <label
              htmlFor="storeName"
              className="block my-4 text-sm font-semibold text-gray-900"
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              className="bg-white text-gray-900 text-sm  block w-full p-2 outline-none border border-gray-300 p-4 rounded-full"
              placeholder="Name your store"
              required
            />
            <label
              htmlFor="storeDescription"
              className="block my-4 text-sm font-semibold text-gray-900"
            >
              Store Description
            </label>
            <input
              type="text"
              id="storeDescription"
              className="bg-white text-gray-900 text-sm  block w-full p-4 outline-none border border-gray-300 p-4 rounded-2xl h-32"
              placeholder="Description your store"
              required
            />
            <label htmlFor="upload">
              <div className="mt-8 h-64 bg-gray-200 outline-dashed outline-2  outline-slate-300 rounded-2xl flex items-center justify-center flex-col">
                <div className=" h-12 w-12 rounded-full flex items-center justify-center bg-gray-100">
                  <GoUpload size={30} className="searchIcon" />
                </div>
                <input type="file" id="upload" style={{ display: "none" }} />
                <p className="font-semibold font-xl sm:text-sm">
                  Upload Soures
                </p>
                <p className="sm:text-sm">Drag and drop a file</p>
              </div>
            </label>
            <div className="flex justify-between my-4">
              <DriveLink
                text="Google Drive"
                icon={PiGoogleDriveLogoLight}
              ></DriveLink>
              <DriveLink text="Link" icon={CiLink} />
              <DriveLink text="Paste Text" icon={FaRegPaste} />
            </div>

            <button
              className="bg-black rounded-2xl h-16 px-4 py-2 text-white w-full my-4 flex items-center justify-center gap-1"
              onClick={(e)=>onUpload(e)}
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="grid col-span-2 text-white"></div>
    </div>
  );
});
