import Link from "next/link";
import React from "react";
import PlatformSidebar from "./PlatformSidebar";
import MainPlatformSidebar from "./MainPlatformSidebar";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileNavBar = ({ setShow, setshowContent, platforms, params }) => {
  return (
    <div className="z-50 inset-0 min-h-screen absolute bg-[#0d0c0f]">
      <button
        className="absolute right-3 top-3"
        onClick={() => {
          setShow(false);
          setshowContent(true);
        }}
      >
        <AiOutlineCloseCircle className="w-10 h-10" />
      </button>

      <div className="flex ">
        <di className="w-24">
          <PlatformSidebar platforms={platforms} />
        </di>
        <div className="bg-[#1A161E] w-full py-16 px-5">
          <MainPlatformSidebar
            platforms={platforms}
            params={params}
            setShow={setShow}
            setshowContent={setshowContent}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
