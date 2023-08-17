import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const AddToMyListButton = () => {
  return (
    <div className="">
      <div className="group relative">
        <button className="w-10 h-10 md:w-fit md:flex md:items-center md:py-1 md:px-3 md:bg-[#0D0C0F]/75 md:rounded-xl md:border md:border-white">
          <span className="hidden md:inline md:mr-3">Přidat do seznamu</span>{" "}
          <AiOutlineHeart className="w-10 h-10" />
        </button>
        <span className="pointer-events-none absolute -top-7 right-0 w-max bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 md:hidden py-1 px-3">
          Přidat do seznamu.
        </span>
      </div>
    </div>
  );
};

export default AddToMyListButton;
