import React from "react";
import { Header } from "../../../componets/header";
import { LeftBar } from "../../../componets/leftBar";
import { storeList } from "../../../data/store";
import { ProductCard } from "./ProductCard";
import { GoPlusCircle } from "react-icons/go";

export const ProductGrid = React.memo(() => {
  return (
    <div className="grid grid-cols-12" style={{ height: "100vh" }}>
      <LeftBar></LeftBar>
      <div className="grid col-span-3"></div>
      <div className="grid col-span-5 py-12 place-items-center">
        <div className="flex flex-col">
          <Header name="My Stores"></Header>
          <div className="p-8 bg-slate-100 rounded-2xl">
            <p className="text-lg font-semibold my-2 sm:text-sm">Generate a store</p>
            <p className="text-slate-400 sm:text-sm sm:text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using. 'Content here,
              content here'
            </p>
          </div>
          <p className="text-lg font-semibold mt-16 mb-8 example">Examples</p>
          <div className="grid grid-cols-3 gap-3">
            {storeList.map((item, id) => (
              <ProductCard item={item} key={id}></ProductCard>
            ))}
          </div>
          <button className="bg-black rounded-2xl px-4 py-2 text-white w-48 flex items-center justify-center gap-1" onClick={()=>window.location.href="/newStore"}>
          <GoPlusCircle color="white" size={15} className="searchIcon"/>
          <span>Create a Store</span>
        </button>
        </div>

      </div>
      <div className="grid col-span-3 text-white"></div>
    </div>
  );
});
